import Gtag from 'vue-gtag-next'

export default defineNuxtPlugin(({ vueApp }) => {
  const {
    public: { googleAnalyticsMeasurementId },
  } = useRuntimeConfig()

  vueApp.use(Gtag, {
    property: {
      id: googleAnalyticsMeasurementId,
      params: {
        send_page_view: true,
      },
    },
  })
})
