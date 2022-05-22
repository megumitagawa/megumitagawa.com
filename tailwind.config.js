module.exports = {
  content: [
    './src/components/**/*.vue',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
    './src/models/**/*.{js,ts}',
    './src/plugins/**/*.{js,ts}',
    './src/store/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    gridTemplateRows: {
      layout: '4.4rem 1fr 4.4rem',
    },
    gridTemplateColumns: {
      layout: '100%',
    },
    spacing: {
      0: '0',
    },
    extend: {},
  },
  plugins: [],
}
