import { accessorType } from '@/store'

declare module 'vue/types/vue' {
  interface Vue {
    $startingFromIndexPage: boolean
    $accessor: typeof accessorType
  }
}
