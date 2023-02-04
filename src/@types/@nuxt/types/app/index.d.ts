import { ContentfulClientApi } from 'contentful'
import { accessorType } from '@/store'
import { mediaQueries } from '@/plugins/injectMediaQueries'
import { defaultImgSizes } from '@/plugins/injectDefaultImgSizes'

declare module '@nuxt/types/app' {
  interface NuxtAppOptions {
    $contentfulClientApi: ContentfulClientApi
    $startingFromIndexPage: boolean
    $accessor: typeof accessorType
    $mediaQueries: typeof mediaQueries
    $defaultImgSizes: typeof defaultImgSizes
  }

  interface Context {
    $contentfulClientApi: ContentfulClientApi
    $startingFromIndexPage: boolean
    $accessor: typeof accessorType
    $mediaQueries: typeof mediaQueries
    $defaultImgSizes: typeof defaultImgSizes
  }
}
