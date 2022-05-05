import Vue from 'vue'
import { Plugin } from '@nuxt/types'
import { createHandleError } from '@/lib/ContextError'

const setClientErrorHandler: Plugin = ({ error }) => {
  const handleError = createHandleError(error)
  Vue.config.errorHandler = handleError
  window.addEventListener('error', handleError)
  window.addEventListener('unhandledrejection', handleError)
}

export default setClientErrorHandler
