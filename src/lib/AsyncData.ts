import Vue, { ComponentOptions } from 'vue'
import { createHandleError } from '@/lib/ContextError'

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
