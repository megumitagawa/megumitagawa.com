import { Plugin } from '@nuxt/types'
import { createClient } from 'contentful'

const injectContentfulClientApi: Plugin = ({ $config }, inject) => {
  if (!$config.createClientParams) return
  inject('contentfulClientApi', createClient($config.createClientParams))
}

export default injectContentfulClientApi
