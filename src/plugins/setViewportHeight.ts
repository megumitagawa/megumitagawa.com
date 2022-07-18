import debounce from 'lodash.debounce'
import { Plugin } from '@nuxt/types'

const setViewportHeight: Plugin = () => {
  if (typeof window === 'undefined') return
  const updateViewportHeight = (): void => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }
  window.addEventListener('resize', debounce(updateViewportHeight, 100))
  updateViewportHeight()
}

export default setViewportHeight
