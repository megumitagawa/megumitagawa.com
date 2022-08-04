import debounce from 'lodash.debounce'
import { Plugin } from '@nuxt/types'
import { updateViewportHeight } from '@/models/Window'

const setWindowResizeHandler: Plugin = ({ $config }) => {
  if (typeof window === 'undefined') return
  window.addEventListener(
    'resize',
    debounce(updateViewportHeight.bind(null, window), $config.debounceDelay)
  )
}

export default setWindowResizeHandler
