// Share settings between Tailwind and NuxtImage
// Overwrite default value: https://github.com/nuxt/image/blob/93ce78aa0736268de132bf30b2d9f6d062c7c3c8/src/module.ts#L31
const screens = {
  xs: '428px',
  sm: '640px',
  md: '720px',
  lg: '1024px',
  xl: '1152px',
  '2xl': '1280px',
  '3xl': '1536px',
  '4xl': '1920px',
}

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
    screens,
    extend: {
      fontFamily: {
        sans: ['Quicksand', 'Kiwi Maru', 'serif'],
      },
      fontSize: {
        xs: [
          '0.75rem', // 12px
          {
            lineHeight: '1.5',
            letterSpacing: '0.05em', // 5%
          },
        ],
        base: [
          '1rem', // 16px
          {
            lineHeight: '1.5',
            letterSpacing: '0.05em', // 5%
          },
        ],
        xl: [
          '1.25rem', // 20px
          {
            lineHeight: '1.5',
            letterSpacing: '0.05em', // 5%
          },
        ],
        '2xl': [
          '1.5rem', // 24px
          {
            lineHeight: '1.5',
            letterSpacing: '0.05em', // 5%
          },
        ],
        '2.5xl': [
          '1.6875rem', // 27px
          {
            lineHeight: '1.5',
            letterSpacing: '0.05em', // 5%
          },
        ],
        '3.5xl': [
          '2.0625rem', // 33px
          {
            lineHeight: '1.5',
            letterSpacing: '0.05em', // 5%
          },
        ],
      },
      width: {
        em: '1em',
        'screens.xs': screens.xs,
        46: '11.5rem',
        57: '13.75rem',
        68: '17rem',
      },
      minWidth: {
        'screens.xs': screens.xs,
      },
      height: {
        em: '1em',
      },
      spacing: {
        'em-1/5': '0.2em',
        21: '5.25rem', // 84px
      },
      colors: {
        inherit: 'inherit',
        white: 'rgb(250 250 250)',
        black: 'rgb(51 51 51)',
        lime: 'rgb(0 238 0)',
      },
    },
  },
  plugins: [],
}
