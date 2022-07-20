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

  const over4xlMediaQueryList = window.matchMedia($mediaQueries['4xl'])
  const updateOver4xl = ({ matches }: MediaQueryListEvent): void => {
    $accessor.currentScreen.set({ over4xl: matches })
  }
  addChangeEventListener(over4xlMediaQueryList, updateOver4xl)
  $accessor.currentScreen.set({ over4xl: over4xlMediaQueryList.matches })
}

export default setCurrentScreen
