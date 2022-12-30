export default defineNuxtPlugin(({ vueApp, $sentry }) => {
  const { nodeEnv } = useRuntimeConfig()
  const reportError = (error: unknown): void => {
    $sentry.captureException(error)
    const message = nodeEnv === 'production' ? 'Error' : error
    // eslint-disable-next-line no-console
    console.error(message)
  }
  vueApp.config.errorHandler = reportError
  window.addEventListener('error', reportError)
  window.addEventListener('unhandledrejection', reportError)
})
