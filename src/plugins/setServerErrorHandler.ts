import Vue from 'vue'
import { Plugin } from '@nuxt/types'
import {
  createNuxtErrorFromServerError,
  ServerError,
} from '@/models/ServerError'

const setServerErrorHandler: Plugin = ({ error, $sentry }) => {
  const handleServerError = (serverError: ServerError): void => {
    $sentry.captureException(serverError)
    const nuxtError = createNuxtErrorFromServerError(serverError)
    error(nuxtError)
  }
  Vue.config.errorHandler = handleServerError
  process.on('uncaughtException', handleServerError)
  process.on('unhandledRejection', handleServerError)
}

export default setServerErrorHandler
