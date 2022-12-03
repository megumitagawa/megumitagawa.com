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
      siteUrl: '',
      worksPageWorkListLength: 20,
    },
  },
})
