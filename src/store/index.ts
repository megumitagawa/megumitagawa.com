import { getAccessorType } from 'typed-vuex'
import * as backdrop from '@/store/backdrop'
import * as resources from '@/store/resources'

export const accessorType = getAccessorType({
  modules: {
    backdrop,
    resources,
  },
})
