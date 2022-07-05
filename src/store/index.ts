import { getAccessorType } from 'typed-vuex'
import * as resources from '@/store/resources'

export const accessorType = getAccessorType({
  modules: {
    resources,
  },
})
