// Share settings between Tailwind and NuxtImage
// Override default value: https://github.com/nuxt/image/blob/93ce78aa0736268de132bf30b2d9f6d062c7c3c8/src/module.ts#L31
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
      screens: {
        'pointer-device': { raw: '(hover: hover) and (pointer: fine)' },
      },
      fontFamily: {
        sans: ['Quicksand', 'Kiwi Maru', 'sans-serif'],
      },
      fontSize: {
        'px-base': '16px', // to know font size set to body
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
      textDecorationThickness: {
        6: '6px',
      },
      textUnderlineOffset: {
        '-6': '-6px',
      },
      width: {
        em: '1em',
        'screens.xs': screens.xs,
        25: '6.25rem', // 100px
        46: '11.5rem', // 184px
        57: '13.75rem', // 220px
        68: '17rem', // 272px
      },
      minWidth: {
        'screens.xs': screens.xs,
      },
      height: {
        em: '1em',
        'large-screen': '100lvh',
        'dynamic-screen': '100dvh',
      },
      minHeight: {
        53: '13.25rem', // 212px
      },
      spacing: {
        'em-1.5': '1.5em',
        1.25: '0.3125rem', // 5px
        2.25: '0.5625rem', // 9px
        4.5: '1.125rem', // 18px
        5: '1.25rem', // 20px: to make importing easy
        10.5: '2.625rem', // 42px
        21: '5.25rem', // 84px
      },
      colors: {
        white: 'rgb(250 250 250)',
        lightgray: 'rgb(184, 184, 184)',
        gray: 'rgb(118 118 118)',
        black: 'rgb(51 51 51)',
        lime: 'rgb(0 238 0)',
      },
      opacity: {
        35: '.35',
      },
      backgroundImage: {
        'quintuple-dots-icon': 'url("@/assets/img/quintuple-dots-icon.svg")',
      },
      outlineOffset: {
        '-1': '-1px',
      },
      transitionProperty: {
        'top-width-opacity': 'top, width, opacity',
      },
    },
  },
}
