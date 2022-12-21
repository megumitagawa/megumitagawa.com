export default defineNuxtPlugin(() => {
  const {
    public: { tailwindTheme },
  } = useRuntimeConfig()
  const { screens, extend } = tailwindTheme

  // `sizes` string of @nuxt/image to display images larger than screen width
  // for high resolution screens
  const defaultImgSizes = Object.entries(screens)
    .map(([key, value]) => [key, `${key}:${parseInt(value, 10) * 2}px`])
    .join(' ')

  // For BaseSource, convert Tailwind breakpoints settings to media queries
  const mediaQueries = Object.fromEntries([
    ...Object.entries(screens).map<[string, string]>(([key, value]) => [
      key,
      `(min-width: ${value})`,
    ]),
    ...Object.entries(screens).map<[string, string]>(([key, value]) => [
      `not${key.charAt(0).toUpperCase()}${key.slice(1)}`,
      `not screen and (min-width: ${value})`,
    ]),
  ])

  // Primary component width
  const pxSpacing5 =
    parseFloat(extend.fontSize['px-base']) * parseFloat(extend.spacing[5])
  const pageContentWidth = parseFloat(screens.xs) - pxSpacing5 * 2
  const primaryContentWidth = pageContentWidth - pxSpacing5 * 2

  return {
    provide: {
      computedTailwindTheme: {
        defaultImgSizes,
        mediaQueries,
        primaryContentWidth,
      },
    },
  }
})
