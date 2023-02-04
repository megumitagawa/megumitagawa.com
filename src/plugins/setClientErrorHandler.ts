import Vue from 'vue'
import { Plugin } from '@nuxt/types'
import {
  ClientError,
  createNuxtErrorFromClientError,
} from '@/models/ClientError'
import {
  addErrorEventListener,
  addUnhandledrejectionEventListener,
} from '@/models/Window'

const setClientErrorHandler: Plugin = ({ $sentry }) => {
  const reportClientError = (clientError: ClientError): void => {
    $sentry.captureException(clientError)
    const nuxtError = createNuxtErrorFromClientError(clientError)
    // eslint-disable-next-line no-console
    console.error(nuxtError.message)
  }
  Vue.config.errorHandler = reportClientError
  addErrorEventListener(window, reportClientError)
  addUnhandledrejectionEventListener(window, reportClientError)
}

export default setClientErrorHandler
