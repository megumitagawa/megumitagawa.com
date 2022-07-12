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
    // Share settings between Tailwind and NuxtImage
    // Overwrite default value: https://github.com/nuxt/image/blob/93ce78aa0736268de132bf30b2d9f6d062c7c3c8/src/module.ts#L31
    screens: {
      xs: '428px',
      sm: '640px',
      md: '720px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1920px',
      '2xl': '1920px',
    },
    extend: {
      fontFamily: {
        sans: ['Quicksand', 'Kiwi Maru', 'serif'],
      },
      fontSize: {
        inherit: 'inherit',
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
