import { createClient } from 'contentful'

export default defineNuxtPlugin(() => {
  const {
    public: { contentfulCreateClientParams },
  } = useRuntimeConfig()

  return {
    provide: {
      contentfulClientApi: createClient(contentfulCreateClientParams),
    },
  }
})
