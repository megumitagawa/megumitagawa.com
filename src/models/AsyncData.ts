import Vue, { ComponentOptions } from 'vue'
import { isErrorLike } from '@/models/ErrorLike'
import { createResources } from '@/models/ResourcesEntry'
import { ResourcesFields } from '@/models/ResourcesFields'
import { createNuxtErrorFromServerError } from '@/models/ServerError'

type AsyncData = Exclude<ComponentOptions<Vue>['asyncData'], undefined>

type CreateErrorCatchableAsyncData = (asyncData: AsyncData) => AsyncData

export const createErrorCatchableAsyncData: CreateErrorCatchableAsyncData =
  (asyncData) => async (context) => {
    try {
      const data = await asyncData(context)
      return data
    } catch (error) {
      const serverError = isErrorLike(error) ? error : new Error(`${error}`)
      context.$sentry.captureException(serverError)
      const nuxtError = createNuxtErrorFromServerError(serverError)
      context.error(nuxtError)
    }
  }

type CreateStoreReadyAsyncData = (asyncData: AsyncData) => AsyncData

export const createStoreReadyAsyncData: CreateStoreReadyAsyncData =
  (asyncData) => async (context) => {
    const { app, $accessor } = context

    const { items: ResourcesEntryList } =
      await app.$contentfulClientApi.withoutUnresolvableLinks.getEntries<ResourcesFields>(
        { content_type: 'resources', 'fields.slug': 'global-components' }
      )
    if (ResourcesEntryList.length < 1)
      throw new Error('No global components resources entry')

    const resources = createResources(ResourcesEntryList[0])
    $accessor.resources.set(resources)

    const data = await asyncData(context)
    return data
  }
