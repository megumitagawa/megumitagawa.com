import { CreateClientParams } from 'contentful'

declare module '@nuxt/types/config/runtime' {
  interface NuxtRuntimeConfig {
    siteUrl: string
    indexPageWorkListLength: number
    worksPageWorkListLength: number
    netlifyFormName: string
    globalBackdropDelay: number
    createClientParams?: CreateClientParams
  }
}
