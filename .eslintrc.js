module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: [],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true },
    ],
    'vue/no-multiple-template-root': 0,
    // Keep reactivity on destructuring assignment from defineProps
    // https://ja.vuejs.org/guide/extras/reactivity-transform.html#vite
    'vue/no-setup-props-destructure': 0,
  },
}
