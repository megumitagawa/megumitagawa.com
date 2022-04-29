import { getAccessorType } from 'typed-vuex'
import * as resourcesData from '@/store/resourcesData'

export const accessorType = getAccessorType({
  modules: {
    resourcesData,
  },
})
