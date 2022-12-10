export default defineNuxtPlugin(({ vueApp, $sentry }) => {
  const reportError = (error: unknown): void => {
    $sentry.captureException(error)
    // eslint-disable-next-line no-console
    console.error('Error')
  }
  vueApp.config.errorHandler = reportError
  window.addEventListener('error', reportError)
  window.addEventListener('unhandledrejection', reportError)
})
