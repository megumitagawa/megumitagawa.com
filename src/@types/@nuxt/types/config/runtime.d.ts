import { CreateClientParams } from 'contentful'

declare module '@nuxt/types/config/runtime' {
  interface NuxtRuntimeConfig {
    siteUrl: string
    indexPageWorkListLength: number
    worksPageWorkListLength: number
    netlifyFormName: string
    indexPageBackdropDelay: number
    createClientParams?: CreateClientParams
  }
}
