import { useAsyncData } from 'nuxt/app'
import { isErrorLike } from '@/models/ErrorLike'
import { createResources } from '@/models/ResourcesEntry'
import { ResourcesFields } from '@/models/ResourcesFields'
import { createNuxtErrorFromServerError } from '@/models/ServerError'

type AsyncDataHandler = Parameters<typeof useAsyncData>[1]

type CreateErrorCatchableAsyncDataHandler = (
  asyncDataHandler: AsyncDataHandler
) => AsyncDataHandler

export const createErrorCatchableAsyncDataHandler: CreateErrorCatchableAsyncDataHandler =
  (asyncDataHandler) => async (nuxtApp) => {
    try {
      const data = await asyncDataHandler(nuxtApp)
      return data
    } catch (error) {
      if (nuxtApp) {
        const serverError = isErrorLike(error) ? error : new Error(`${error}`)
        nuxtApp.$sentry.captureException(serverError)
        const nuxtError = createNuxtErrorFromServerError(serverError)
        nuxtApp.error(nuxtError)
      }
    }
  }

type CreateStoreReadyAsyncDataHandler = (
  asyncDataHandler: AsyncDataHandler
) => AsyncDataHandler

export const createStoreReadyAsyncDataHandler: CreateStoreReadyAsyncDataHandler =
  (asyncDataHandler) => async (nuxtApp) => {
    if (nuxtApp) {
      const { $contentfulClientApi, $accessor } = nuxtApp

      const { items: ResourcesEntryList } =
        await $contentfulClientApi.withoutUnresolvableLinks.getEntries<ResourcesFields>(
          { content_type: 'resources', 'fields.slug': 'global-components' }
        )
      if (ResourcesEntryList.length < 1)
        throw new Error('No global components resources entry')

      const resources = createResources(ResourcesEntryList[0])
      $accessor.resources.set(resources)
    }

    const data = await asyncDataHandler(nuxtApp)
    return data
  }
