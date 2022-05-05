import Vue, { ComponentOptions } from 'vue'
import { createHandleError } from '@/lib/ContextError'
import { createResources } from '@/lib/ResourcesEntry'
import { ResourcesFields } from '@/lib/ResourcesFields'

type AsyncData = Exclude<ComponentOptions<Vue>['asyncData'], undefined>

type CreateErrorCatchableAsyncData = (asyncData: AsyncData) => AsyncData

export const createErrorCatchableAsyncData: CreateErrorCatchableAsyncData =
  (asyncData) => async (context) => {
    try {
      const data = await asyncData(context)
      return data
    } catch (error) {
      createHandleError(context.error)()
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
