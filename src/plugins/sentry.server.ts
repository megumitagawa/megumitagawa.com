// https://docs.sentry.io/platforms/node/
// https://docs.sentry.io/platforms/javascript/guides/vue/
// https://github.com/nuxt-community/sentry-module/issues/358#issuecomment-1016983543
import * as Sentry from '@sentry/vue'
import '@sentry/tracing'

export default defineNuxtPlugin(({ vueApp }) => {
  const { nodeEnv, sentryDsn, sentryTracesSampleRate } = useRuntimeConfig()
  Sentry.init({
    app: [vueApp],
    dsn: sentryDsn,
    tracesSampleRate: sentryTracesSampleRate,
    logErrors: true,
    environment: `${nodeEnv}: server`,
  })

  const tracingOptions: Parameters<typeof Sentry.createTracingMixins>[0] = {
    trackComponents: true,
    timeout: 2000,
    hooks: ['activate', 'create', 'destroy', 'mount', 'update'],
  }
  vueApp.mixin(Sentry.createTracingMixins(tracingOptions))
  Sentry.attachErrorHandler(vueApp, {
    logErrors: true,
    attachProps: true,
    ...tracingOptions,
  })

  return {
    provide: {
      sentry: {
        captureException: Sentry.captureException,
      },
    },
  }
})
