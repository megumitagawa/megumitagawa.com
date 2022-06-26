import { ContentfulClientApi } from 'contentful'
import { accessorType } from '@/store'

declare module '@nuxt/types/app' {
  interface NuxtAppOptions {
    $contentfulClientApi: ContentfulClientApi
    $startingFromIndexPage: boolean
    $accessor: typeof accessorType
  }

  interface Context {
    $contentfulClientApi: ContentfulClientApi
    $startingFromIndexPage: boolean
    $accessor: typeof accessorType
  }
}
