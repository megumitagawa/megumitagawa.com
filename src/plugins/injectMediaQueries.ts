import { Plugin } from '@nuxt/types'
import { theme } from '@/../tailwind.config'

// For BaseSource, convert Tailwind breakpoints settings to media queries
export const mediaQueries = Object.fromEntries([
  ...Object.entries(theme.screens).map(([key, value]) => [
    key,
    `(min-width: ${value})`,
  ]),
  ...Object.entries(theme.screens).map(([key, value]) => [
    `not${key.charAt(0).toUpperCase()}${key.slice(1)}`,
    `not screen and (min-width: ${value})`,
  ]),
])

const injectMediaQueries: Plugin = (context, inject) => {
  inject('mediaQueries', mediaQueries)
}

export default injectMediaQueries
