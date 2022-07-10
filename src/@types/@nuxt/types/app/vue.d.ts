import { accessorType } from '@/store'
import { mediaQueries } from '@/plugins/injectMediaQueries'
import { defaultImgSizes } from '@/plugins/injectDefaultImgSizes'

declare module 'vue/types/vue' {
  interface Vue {
    $startingFromIndexPage: boolean
    $accessor: typeof accessorType
    $mediaQueries: typeof mediaQueries
    $defaultImgSizes: typeof defaultImgSizes
  }
}
