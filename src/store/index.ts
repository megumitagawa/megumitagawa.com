import { getAccessorType } from 'typed-vuex'
import * as resources from '@/store/resources'
import * as currentScreen from '@/store/currentScreen'

export const accessorType = getAccessorType({
  modules: {
    resources,
    currentScreen,
  },
})
