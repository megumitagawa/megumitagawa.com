import { ContentfulClientApi } from 'contentful'
import { accessorType } from '@/store'

declare module '@nuxt/types/app' {
  interface NuxtAppOptions {
    $contentfulClientApi: ContentfulClientApi
    $accessor: typeof accessorType
  }

  interface Context {
    $accessor: typeof accessorType
  }
}
