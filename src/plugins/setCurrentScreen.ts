import { Plugin } from '@nuxt/types'
import { addChangeEventListener } from '@/models/MediaQueryList'

const setCurrentScreen: Plugin = ({ $mediaQueries, $accessor }) => {
  if (typeof window === 'undefined') return
  const overLgMediaQueryList = window.matchMedia($mediaQueries.lg)
  const updateOverLg = ({ matches }: MediaQueryListEvent): void => {
    $accessor.currentScreen.set({ overLg: matches })
  }
  addChangeEventListener(overLgMediaQueryList, updateOverLg)
  $accessor.currentScreen.set({ overLg: overLgMediaQueryList.matches })
}

export default setCurrentScreen
