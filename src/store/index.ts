import { getAccessorType } from 'typed-vuex'
import * as backdrop from '@/store/backdrop'
import * as resourcesData from '@/store/resourcesData'

export const accessorType = getAccessorType({
  modules: {
    backdrop,
    resourcesData,
  },
})
