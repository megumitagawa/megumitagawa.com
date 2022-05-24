import Vue from 'vue'
import { Plugin } from '@nuxt/types'
import { createHandleServerError } from '@/models/HandleNuxtError'

const setServerErrorHandler: Plugin = ({ error, isDev, $sentry }) => {
  const handleServerError = createHandleServerError((nuxtError) => {
    $sentry.captureException(nuxtError)
    error(nuxtError)
  }, isDev)
  Vue.config.errorHandler = handleServerError
  process.on('uncaughtException', handleServerError)
  process.on('unhandledRejection', handleServerError)
}

export default setServerErrorHandler
