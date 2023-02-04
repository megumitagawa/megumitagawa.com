import { createClient } from 'contentful'

export default defineNuxtPlugin(() => {
  const { contentfulCreateClientParams } = useRuntimeConfig()

  return {
    provide: {
      contentfulClientApi: createClient(contentfulCreateClientParams),
    },
  }
})
