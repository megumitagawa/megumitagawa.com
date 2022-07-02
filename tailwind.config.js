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
    extend: {
      fontSize: {
        inherit: 'inherit',
      },
      gridTemplateRows: {
        'default-layout': '4.4rem 1fr 4.4rem',
      },
      gridTemplateColumns: {
        'default-layout': '100%',
      },
      width: {
        em: '1em',
      },
      height: {
        em: '1em',
      },
    },
  },
  plugins: [],
}
