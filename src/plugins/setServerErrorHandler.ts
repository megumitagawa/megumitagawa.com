import Vue from 'vue'
import { Plugin } from '@nuxt/types'
import {
  createNuxtErrorFromServerError,
  ServerError,
} from '@/models/ServerError'

const setServerErrorHandler: Plugin = ({ error, $sentry }) => {
  const reportServerError = (serverError: ServerError): void => {
    $sentry.captureException(serverError)
    const nuxtError = createNuxtErrorFromServerError(serverError)
    error(nuxtError)
  }
  Vue.config.errorHandler = reportServerError
  process.on('uncaughtException', reportServerError)
  process.on('unhandledRejection', reportServerError)
}

export default setServerErrorHandler
