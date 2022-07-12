import { createClient } from 'contentful'
import { NuxtConfig } from '@nuxt/types'
import { NuxtOptionsRuntimeConfig } from '@nuxt/types/config/runtime'
import { theme } from './tailwind.config'
import { createNuxtOptionsGenerateRoute } from './src/models/WorkEntries'
import { WorkFields } from './src/models/WorkFields'

const {
  NODE_ENV = 'production',
  NUXT_PUBLIC_SITE_URL = '',
  NUXT_PUBLIC_INDEX_PAGE_WORK_LIST_LENGTH = '',
  NUXT_PUBLIC_WORKS_PAGE_WORK_LIST_LENGTH = '',
  NUXT_PUBLIC_NETLIFY_FORM_NAME = '',
  NUXT_PUBLIC_INDEX_PAGE_BACKDROP_DELAY = '',
  NUXT_PRIVATE_CTF_SPACE_ID = '',
  NUXT_PRIVATE_CTF_CDA_ACCESS_TOKEN = '',
  NUXT_PRIVATE_META_ROBOTS_NONE = 'off',
} = process.env

const indexPageWorkListLengthNumber = +NUXT_PUBLIC_INDEX_PAGE_WORK_LIST_LENGTH
const indexPageWorkListLength =
  indexPageWorkListLengthNumber > 0 ? indexPageWorkListLengthNumber : 5
const worksPageWorkListLengthNumber = +NUXT_PUBLIC_WORKS_PAGE_WORK_LIST_LENGTH
const worksPageWorkListLength =
  worksPageWorkListLengthNumber > 0 ? worksPageWorkListLengthNumber : 20

// When target is static, asyncData behavior is different between nuxt dev and nuxt start
// Plugin and environment variables for contentful should be available when running nuxt dev
const productionMode = NODE_ENV === 'production'
const createClientParams = {
  space: NUXT_PRIVATE_CTF_SPACE_ID,
  accessToken: NUXT_PRIVATE_CTF_CDA_ACCESS_TOKEN,
}

const indexPageBackdropDelayNumber = +NUXT_PUBLIC_INDEX_PAGE_BACKDROP_DELAY
const indexPageBackdropDelay = indexPageBackdropDelayNumber || 0

const metaRobotsNone = NUXT_PRIVATE_META_ROBOTS_NONE.toLowerCase() === 'on'

// For NuxtImage, convert Tailwind breakpoints settings to unit-less
const screensWithoutUnits = Object.fromEntries(
  Object.entries(theme.screens).map(([key, value]) => [
    key,
    parseInt(value, 10),
  ])
)

const nuxtConfig: NuxtConfig = {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Source directory: https://nuxtjs.org/docs/configuration-glossary/configuration-srcdir
  srcDir: 'src/',

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'megumitagawa.com',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      ...(metaRobotsNone
        ? [{ name: 'robots', content: 'noindex,nofollow' }]
        : []),
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@500&family=Quicksand:wght@600&display=swap',
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/Fragment.ts', mode: 'all' },
    { src: '@/plugins/setClientErrorHandler.ts', mode: 'client' },
    { src: '@/plugins/setServerErrorHandler.ts', mode: 'server' },
    {
      src: '@/plugins/injectContentfulClientApi.ts',
      mode: productionMode ? 'server' : 'all',
    },
    { src: '@/plugins/injectStartingFromIndexPage.ts', mode: 'all' },
    { src: '@/plugins/injectMediaQueries.ts', mode: 'all' },
    { src: '@/plugins/injectDefaultImgSizes.ts', mode: 'all' },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://image.nuxtjs.org/
    '@nuxt/image',
    // https://typed-vuex.roe.dev/
    'nuxt-typed-vuex',
    // https://github.com/nuxt/postcss8
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://sentry.nuxtjs.org/
    '@nuxtjs/sentry',
    // https://portal-vue.linusb.org/
    'portal-vue/nuxt',
  ],

  // Image optimization: https://image.nuxtjs.org/api/options/
  image: {
    domains: ['images.ctfassets.net'],
    screens: screensWithoutUnits,
  },

  // Sentry: https://sentry.nuxtjs.org/sentry/options
  sentry: {
    disabled: !productionMode,
    lazy: true,
    sourceMapStyle: 'hidden-source-map',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  // Public environment variables: https://nuxtjs.org/docs/configuration-glossary/configuration-runtime-config
  publicRuntimeConfig: {
    siteUrl: NUXT_PUBLIC_SITE_URL,
    indexPageWorkListLength,
    worksPageWorkListLength,
    netlifyFormName: NUXT_PUBLIC_NETLIFY_FORM_NAME,
    indexPageBackdropDelay,
    ...(productionMode ? {} : { createClientParams }),
  } as NuxtOptionsRuntimeConfig,

  // Private environment variables: https://nuxtjs.org/docs/configuration-glossary/configuration-runtime-config
  privateRuntimeConfig: {
    ...(productionMode ? { createClientParams } : {}),
  } as NuxtOptionsRuntimeConfig,

  // Generating configuration: https://nuxtjs.org/docs/configuration-glossary/configuration-generate/
  generate: {
    async routes() {
      const contentfulClientApi = createClient(createClientParams)
      const workEntries =
        await contentfulClientApi.withoutUnresolvableLinks.getEntries<WorkFields>(
          { content_type: 'work', limit: worksPageWorkListLength }
        )
      return createNuxtOptionsGenerateRoute(workEntries, '/works/page/')
    },
  },
}

export default nuxtConfig
