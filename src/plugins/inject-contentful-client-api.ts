import { Plugin } from '@nuxt/types'
import { ContentfulClientApi, createClient } from 'contentful'

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $contentfulClientApi: ContentfulClientApi
  }
}

const plugin: Plugin = ({ $config }, inject) => {
  inject(
    'contentfulClientApi',
    createClient({
      space: `${$config.ctfSpaceId}`,
      accessToken: `${$config.ctfCdaAccessToken}`,
    })
  )
}

export default plugin
