import { getAccessorType } from 'typed-vuex'
import * as resources from '@/store/resources'
import * as currentScreen from '@/store/currentScreen'
import * as currentLayout from '@/store/currentLayout'

export const accessorType = getAccessorType({
  modules: {
    resources,
    currentScreen,
    currentLayout,
  },
})
