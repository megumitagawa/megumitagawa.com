import { ContentfulClientApi } from 'contentful'

declare module '@nuxt/types/app' {
  interface NuxtAppOptions {
    $contentfulClientApi: ContentfulClientApi
  }
}
