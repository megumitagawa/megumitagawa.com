// When target is static, asyncData behavior is different between nuxt dev and nuxt start
// Plugin and environment variables for contentful should be available when running nuxt dev
const productionMode = process.env.NODE_ENV === 'production'
const contentfulRuntimeConfig = {
  ctfSpaceId: process.env.NUXT_PRIVATE_CTF_SPACE_ID || '',
  ctfCdaAccessToken: process.env.NUXT_PRIVATE_CTF_CDA_ACCESS_TOKEN || '',
}

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

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
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/set-client-error-handler.ts', mode: 'client' },
    { src: '@/plugins/set-server-error-handler.ts', mode: 'server' },
    {
      src: '@/plugins/inject-contentful-client-api.ts',
      mode: productionMode ? 'server' : 'all',
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://image.nuxtjs.org/
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Source directory: https://nuxtjs.org/docs/configuration-glossary/configuration-srcdir
  srcDir: 'src/',

  // Image optimization: https://image.nuxtjs.org/api/options/
  image: {
    domains: ['images.ctfassets.net'],
  },

  // Public environment variables: https://nuxtjs.org/docs/configuration-glossary/configuration-runtime-config
  publicRuntimeConfig: {
    siteUrl: process.env.NUXT_PUBLIC_SITE_URL || '',
    ...(productionMode ? {} : contentfulRuntimeConfig),
  },

  // Private environment variables: https://nuxtjs.org/docs/configuration-glossary/configuration-runtime-config
  privateRuntimeConfig: {
    ...(productionMode ? contentfulRuntimeConfig : {}),
  },
}
