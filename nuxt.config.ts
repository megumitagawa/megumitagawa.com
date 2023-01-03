import { createClient } from 'contentful'
import { version as contentfulVersion } from 'contentful/package.json'
import { createDynamicRouteList } from './src/models/WorkEntries'
import { WorkFields } from './src/models/WorkFields'
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

  modules: [
    '@nuxt/image-edge',
    ['@pinia/nuxt', { autoImports: ['defineStore'] }],
  ],

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
      tailwindTheme: theme,
      sentryDsn: '',
      sentryTracesSampleRate: 1,
      siteHostname: '',
      siteUrl: '',
      worksPageWorkListLength: 20,
    },
  },

  routeRules: {
    '/works': { redirect: { to: '/works/page/1', statusCode: 301 } },
  },

  hooks: {
    // Workaround to generate dynamic routes instead of generate.routes
    // https://github.com/nuxt/framework/issues/4919#issuecomment-1124349857
    async 'nitro:config'({ prerender }) {
      const {
        NUXT_CONTENTFUL_CREATE_CLIENT_PARAMS_ACCESS_TOKEN:
          accessToken = 'dummy',
        NUXT_CONTENTFUL_CREATE_CLIENT_PARAMS_SPACE: space = 'dummy',
        NUXT_PUBLIC_WORKS_PAGE_WORK_LIST_LENGTH: worksPageWorkListLength = '',
      } = process.env
      const contentfulClientApi = createClient({ accessToken, space })
      const unsafeLimit = parseInt(worksPageWorkListLength, 10)
      const limit = Number.isNaN(unsafeLimit) ? 20 : unsafeLimit
      const workEntries =
        await contentfulClientApi.withoutUnresolvableLinks.getEntries<WorkFields>(
          {
            content_type: 'work',
            limit,
          }
        )
      const routes = createDynamicRouteList(workEntries, '/works/page/')
      if (prerender?.routes) prerender.routes.push(...routes)
    },
  },

  build: {
    // Workaround to build with @contentful/rich-text-types and contentful-rich-text-vue-renderer in development
    // https://nuxt.com/docs/guide/concepts/esm#transpiling-libraries
    transpile: [
      '@contentful/rich-text-types',
      'contentful-rich-text-vue-renderer',
    ],
  },

  vite: {
    define: {
      // Required variable to import contentful as TypeScript
      // https://github.com/contentful/contentful.js/blob/2ede16730b869e7f8041d35ea176b54550098da0/webpack.config.js#L4
      // This is workaround for following issues of contentful
      // - Different handling of modules between production and development
      //   https://github.com/contentful/contentful.js/issues/1233#issuecomment-1216175360
      // - Bundle code containing eval
      __VERSION__: `'${contentfulVersion}'`,
    },
    optimizeDeps: {
      // Workaround to build with @contentful/rich-text-types in production
      // https://ja.vitejs.dev/config/dep-optimization-options.html#optimizedeps-include
      include: ['@contentful/rich-text-types'],
    },
  },

  alias: {
    // Required alias to import contentful as TypeScript
    // This is workaround for following issues of contentful
    // - Different handling of modules between production and development
    //   https://github.com/contentful/contentful.js/issues/1233#issuecomment-1216175360
    // - Bundle code containing eval
    contentful: 'contentful/lib/index',
    // Workaround to build with @pinia/nuxt
    // https://stackoverflow.com/a/74801367
    pinia: '@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
  },
})
