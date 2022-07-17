/**
 * Override viewport setting for shrinked display
 * in screen widths less than minimum breakpoint
 * Head method set in page components and NuxtPicture components
 * reuses head in config = app.head at each page transition
 * So viewport setting must be adjusted in advance
 * Since window object is required, it is adjusted here
 */

import { Plugin } from '@nuxt/types'
import { theme } from '@/../tailwind.config'

const updateViewportMeta: Plugin = ({ app }) => {
  if (typeof window === 'undefined') return
  const head = app.head
  if (!head) return
  const functionHead = typeof head === 'function'
  const metaInfo = functionHead ? head() : head
  const metaProperty = metaInfo.meta?.find(
    (metaProperty) => metaProperty.name === 'viewport'
  )
  if (typeof metaProperty?.content !== 'string') return
  const minWidth = parseInt(theme.screens.xs, 10)
  const documentClientWidth = document.documentElement.clientWidth
  if (documentClientWidth >= minWidth) return
  const initialScale = documentClientWidth / minWidth
  metaProperty.content = `width=${minWidth},initial-scale=${initialScale}`
  if (functionHead) app.head = () => metaInfo
}

export default updateViewportMeta
