import { useAsyncData } from 'nuxt/app'
import { createResources } from '@/models/ResourcesEntry'
import { ResourcesFields } from '@/models/ResourcesFields'

type AsyncDataHandler = Parameters<typeof useAsyncData>[1]

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
