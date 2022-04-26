import { CreateClientParams } from 'contentful'

declare module '@nuxt/types/config/runtime' {
  interface NuxtRuntimeConfig {
    siteUrl: string
    indexPageWorkListLength: number
    worksPageWorkListLength: number
    createClientParams?: CreateClientParams
  }
}
