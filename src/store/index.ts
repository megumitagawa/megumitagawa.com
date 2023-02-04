import { getAccessorType } from 'typed-vuex'
import * as resources from '@/store/resources'
import * as currentLayout from '@/store/currentLayout'

export const accessorType = getAccessorType({
  modules: {
    resources,
    currentLayout,
  },
})
