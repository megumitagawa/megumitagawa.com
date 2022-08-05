import debounce from 'lodash.debounce'
import { Plugin } from '@nuxt/types'
import { updateViewportHeight, addResizeEventListener } from '@/models/Window'

const setWindowResizeHandler: Plugin = ({ $config }) => {
  if (typeof window === 'undefined') return
  addResizeEventListener(
    window,
    debounce(updateViewportHeight.bind(null, window), $config.debounceDelay)
  )
}

export default setWindowResizeHandler
