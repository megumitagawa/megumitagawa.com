import Vue from 'vue'
import { Plugin } from '@nuxt/types'
import { createHandleClientError } from '@/models/HandleNuxtError'

const setClientErrorHandler: Plugin = ({ isDev, $sentry }) => {
  const handleClientError = createHandleClientError((nuxtError) => {
    $sentry.captureException(nuxtError)
    // eslint-disable-next-line no-console
    console.error(nuxtError.message)
  }, isDev)
  Vue.config.errorHandler = handleClientError
  window.addEventListener('error', handleClientError)
  window.addEventListener('unhandledrejection', handleClientError)
}

export default setClientErrorHandler
