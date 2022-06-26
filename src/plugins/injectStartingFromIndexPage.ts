import { Plugin } from '@nuxt/types'

const injectStartingFromIndexPage: Plugin = ({ route }, inject) => {
  inject('startingFromIndexPage', route.path === '/')
}

export default injectStartingFromIndexPage
