import Vue from 'vue'
import { Plugin } from '@nuxt/types'
import { createHandleClientError } from '@/lib/HandleNuxtError'

const setClientErrorHandler: Plugin = ({ isDev }) => {
  const handleClientError = createHandleClientError(({ message }) => {
    // eslint-disable-next-line no-console
    console.error(message)
  }, isDev)
  Vue.config.errorHandler = handleClientError
  window.addEventListener('error', handleClientError)
  window.addEventListener('unhandledrejection', handleClientError)
}

export default setClientErrorHandler
