import { theme } from './tailwind.config'

// For NuxtImage, convert Tailwind breakpoints settings to unit-less
const screensWithoutUnits = Object.fromEntries(
  Object.entries(theme.screens).map(([key, value]) => [
    key,
    parseInt(value, 10),
  ])
)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',

  css: ['@/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@nuxt/image-edge'],

  image: {
    domains: ['images.ctfassets.net'],
    screens: screensWithoutUnits,
  },

  runtimeConfig: {
    // Must not be empty
    // https://github.com/contentful/contentful.js/blob/beta-v10/lib/contentful.ts#L37
    contentfulCreateClientParams: {
      accessToken: 'dummy',
      space: 'dummy',
    },
    public: {
      // Must not be empty
      // https://github.com/contentful/contentful.js/blob/beta-v10/lib/contentful.ts#L37
      contentfulCreateClientParams: {
        accessToken: 'dummy',
        space: 'dummy',
      },
      indexFullBodyImageDelay: 0,
      indexPageBackdropDelay: 0,
      indexPageWorkListLength: 5,
      metaRobotsNone: false,
      netlifyFormName: '',
      nodeEnv: process.env.NODE_ENV,
      sentryDsn: '',
      sentryTracesSampleRate: 1,
      siteHostname: '',
      siteUrl: '',
      worksPageWorkListLength: 20,
    },
  },
})
