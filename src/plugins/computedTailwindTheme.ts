export default defineNuxtPlugin(() => {
  const {
    public: { tailwindTheme },
  } = useRuntimeConfig()
  const { screens, extend } = tailwindTheme

  // For BaseImage, convert Tailwind breakpoints settings to media queries
  const mediaQueries = Object.fromEntries([
    ...Object.entries(screens).map<[string, string]>(([key, value]) => [
      key,
      `(min-width: ${value})`,
    ]),
  ])

  // Screen key list to know its order
  const screenKeyList = (Object.keys(screens) as (keyof typeof screens)[]).sort(
    (screenKeyA, screenKeyB) =>
      parseInt(screens[screenKeyB], 10) - parseInt(screens[screenKeyA], 10)
  )

  // Primary component width
  const pxSpacing5 =
    parseFloat(extend.fontSize['px-base']) * parseFloat(extend.spacing[5])
  const pageContentWidth = parseFloat(screens.xs) - pxSpacing5 * 2
  const primaryContentWidth = pageContentWidth - pxSpacing5 * 2

  return {
    provide: {
      computedTailwindTheme: {
        mediaQueries,
        screenKeyList,
        primaryContentWidth,
      },
    },
  }
})
