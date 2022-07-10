import { Plugin } from '@nuxt/types'
import { theme } from '@/../tailwind.config'

// `sizes` string of @nuxt/image to display images larger than screen width
// for high resolution screens
export const defaultImgSizes = Object.entries(theme.screens)
  .map(([key, value]) => [key, `${key}:${parseInt(value, 10) * 2}px`])
  .join(' ')

const injectDefaultImgSizes: Plugin = (context, inject) => {
  inject('defaultImgSizes', defaultImgSizes)
}

export default injectDefaultImgSizes
