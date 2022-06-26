import Vue from 'vue'
import { Plugin } from '@nuxt/types'
import {
  ClientError,
  createNuxtErrorFromClientError,
} from '@/models/ClientError'

const setClientErrorHandler: Plugin = ({ $sentry }) => {
  const reportClientError = (clientError: ClientError): void => {
    $sentry.captureException(clientError)
    const nuxtError = createNuxtErrorFromClientError(clientError)
    // eslint-disable-next-line no-console
    console.error(nuxtError.message)
  }
  Vue.config.errorHandler = reportClientError
  window.addEventListener('error', reportClientError)
  window.addEventListener('unhandledrejection', reportClientError)
}

export default setClientErrorHandler
