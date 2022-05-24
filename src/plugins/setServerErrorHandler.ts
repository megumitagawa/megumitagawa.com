import Vue from 'vue'
import { Plugin } from '@nuxt/types'
import { createHandleServerError } from '@/models/HandleNuxtError'

const setServerErrorHandler: Plugin = ({ error, $sentry }) => {
  const handleServerError = createHandleServerError((nuxtError) => {
    $sentry.captureException(nuxtError)
    error(nuxtError)
  })
  Vue.config.errorHandler = handleServerError
  process.on('uncaughtException', handleServerError)
  process.on('unhandledRejection', handleServerError)
}

export default setServerErrorHandler
