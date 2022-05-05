import Vue from 'vue'
import { Plugin } from '@nuxt/types'
import { createHandleError } from '@/lib/ContextError'

const setServerErrorHandler: Plugin = ({ error }) => {
  const handleError = createHandleError(error)
  Vue.config.errorHandler = handleError
  process.on('uncaughtException', handleError)
  process.on('unhandledRejection', handleError)
}

export default setServerErrorHandler
