import Vue, { ComponentOptions } from 'vue'
import { createHandleError } from '@/lib/ContextError'
import { createResourcesData } from '@/lib/ResourcesEntry'
import { ResourcesFields } from '@/lib/ResourcesFields'

type AsyncData = Exclude<ComponentOptions<Vue>['asyncData'], undefined>

type MakeErrorCatchable = (asyncData: AsyncData) => AsyncData

export const makeErrorCatchable: MakeErrorCatchable =
  (asyncData) => async (context) => {
    try {
      const data = await asyncData(context)
      return data
    } catch (error) {
      createHandleError(context.error)()
    }
  }

type MakeStoreReady = (asyncData: AsyncData) => AsyncData

export const makeStoreReady: MakeStoreReady =
  (asyncData) => async (context) => {
    const { app, $accessor } = context

    const { items: ResourcesEntryList } =
      await app.$contentfulClientApi.withoutUnresolvableLinks.getEntries<ResourcesFields>(
        { content_type: 'resources', 'fields.slug': 'global-components' }
      )
    if (ResourcesEntryList.length < 1)
      throw new Error('No global components resources entry')

    const resourcesData = createResourcesData(ResourcesEntryList[0])
    $accessor.resourcesData.set(resourcesData)

    const data = await asyncData(context)
    return data
  }
