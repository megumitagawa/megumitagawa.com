// https://docs.sentry.io/platforms/javascript/guides/vue/
// https://github.com/nuxt-community/sentry-module/issues/358#issuecomment-1016983543
import * as Sentry from '@sentry/vue'
import { BrowserTracing } from '@sentry/tracing'

export default defineNuxtPlugin(({ vueApp, $router }) => {
  const { nodeEnv, sentryDsn, sentryTracesSampleRate, siteHostname } =
    useRuntimeConfig()
  Sentry.init({
    app: [vueApp],
    dsn: sentryDsn,
    tracesSampleRate: sentryTracesSampleRate,
    logErrors: true,
    environment: nodeEnv,
    integrations: [
      new BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation($router),
        tracePropagationTargets: [siteHostname, /^\//],
      }),
    ],
  })

  return {
    provide: {
      sentry: {
        captureException: Sentry.captureException,
      },
    },
  }
})
