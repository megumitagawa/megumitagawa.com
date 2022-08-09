<template>
  <svg
    :viewBox="viewBox"
    :class="[
      'block grow-0 shrink-0',
      // prettier-ignore
      {
        'w-em': !fullWidth,
        'w-full': fullWidth,
        'h-em': !fullHeight,
        'h-full': fullHeight,
        'text-xs': sizeXsXs, 'lg:text-xs': sizeXsLg, '3xl:text-xs': sizeXs3xl, '4xl:text-xs': sizeXs4xl,
        'text-xl': sizeXlXs, 'lg:text-xl': sizeXlLg, '3xl:text-xl': sizeXl3xl, '4xl:text-xl': sizeXl4xl,
        'text-2.5xl': size2hXlXs, 'lg:text-2.5xl': size2hXlLg, '3xl:text-2.5xl': size2hXl3xl, '4xl:text-2.5xl': size2hXl4xl,
        'text-3.5xl': size3hXlXs, 'lg:text-3.5xl': size3hXlLg, '3xl:text-3.5xl': size3hXl3xl, '4xl:text-3.5xl': size3hXl4xl,
        'text-inherit': colorInherit,
        'text-white': colorInvert,
        'text-black': colorBase,
      },
    ]"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'
import { theme } from '@/../tailwind.config'

type Size = 'xs' | 'xl' | '2.5xl' | '3.5xl'

type Data = {}
type Methods = {}
// prettier-ignore
type Computed = {
  sizeXs: boolean, sizeXsXs: boolean, sizeXsLg: boolean, sizeXs3xl: boolean, sizeXs4xl: boolean,
  sizeXl: boolean, sizeXlXs: boolean, sizeXlLg: boolean, sizeXl3xl: boolean, sizeXl4xl: boolean,
  size2hXl: boolean, size2hXlXs: boolean, size2hXlLg: boolean, size2hXl3xl: boolean, size2hXl4xl: boolean,
  size3hXl: boolean, size3hXlXs: boolean, size3hXlLg: boolean, size3hXl3xl: boolean, size3hXl4xl: boolean,
  colorInvert: boolean
  colorInherit: boolean
  colorBase: boolean
}
type Props = {
  viewBox: string
  fullWidth: boolean
  fullHeight: boolean
  size: Size | { [key in keyof typeof theme.screens]?: Size }
  color: 'invert' | 'inherit' | 'base'
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'BaseSvg',

  inheritAttrs: false,

  props: {
    viewBox: { type: String, required: true },
    fullWidth: { type: Boolean, default: false },
    fullHeight: { type: Boolean, default: false },
    // prettier-ignore
    size: {
      validator: (value) => typeof value === 'object'
        ? Object.entries(value).every(
            ([key, value]) =>
              Object.keys(theme.screens).includes(key) &&
              ['xs', 'xl', '2.5xl', '3.5xl'].includes(value)
          )
        : ['xs', 'xl', '2.5xl', '3.5xl'].includes(value),
      default: 'xs',
    },
    color: {
      validator: (value) => ['invert', 'inherit', 'base'].includes(value),
      default: 'base',
    },
  },

  // prettier-ignore
  computed: {
    sizeXs() { return this.size === 'xs' },
    sizeXsXs() { const s = this.size; return typeof s === 'object' ? s.xs === 'xs' : this.sizeXs },
    sizeXsLg() { const s = this.size; return typeof s === 'object' ? (s.lg === 'xs' || (!s.lg && this.sizeXsXs)) : this.sizeXs },
    sizeXs3xl() { const s = this.size; return typeof s === 'object' ? (s['3xl'] === 'xs' || (!s['3xl'] && this.sizeXsLg)) : this.sizeXs },
    sizeXs4xl() { const s = this.size; return typeof s === 'object' ? (s['4xl'] === 'xs' || (!s['4xl'] && this.sizeXs3xl)) : this.sizeXs },
    sizeXl() { return this.size === 'xl' },
    sizeXlXs() { const s = this.size; return typeof s === 'object' ? s.xs === 'xl' : this.sizeXl },
    sizeXlLg() { const s = this.size; return typeof s === 'object' ? (s.lg === 'xl' || (!s.lg && this.sizeXlXs)) : this.sizeXl },
    sizeXl3xl() { const s = this.size; return typeof s === 'object' ? (s['3xl'] === 'xl' || (!s['3xl'] && this.sizeXlLg)) : this.sizeXl },
    sizeXl4xl() { const s = this.size; return typeof s === 'object' ? (s['4xl'] === 'xl' || (!s['4xl'] && this.sizeXl3xl)) : this.sizeXl },
    size2hXl() { return this.size === '2.5xl' },
    size2hXlXs() { const s = this.size; return typeof s === 'object' ? s.xs === '2.5xl' : this.size2hXl },
    size2hXlLg() { const s = this.size; return typeof s === 'object' ? (s.lg === '2.5xl' || (!s.lg && this.size2hXlXs)) : this.size2hXl },
    size2hXl3xl() { const s = this.size; return typeof s === 'object' ? (s['3xl'] === '2.5xl' || (!s['3xl'] && this.size2hXlLg)) : this.size2hXl },
    size2hXl4xl() { const s = this.size; return typeof s === 'object' ? (s['4xl'] === '2.5xl' || (!s['4xl'] && this.size2hXl3xl)) : this.size2hXl },
    size3hXl() { return this.size === '3.5xl' },
    size3hXlXs() { const s = this.size; return typeof s === 'object' ? s.xs === '3.5xl' : this.size3hXl },
    size3hXlLg() { const s = this.size; return typeof s === 'object' ? (s.lg === '3.5xl' || (!s.lg && this.size3hXlXs)) : this.size3hXl },
    size3hXl3xl() { const s = this.size; return typeof s === 'object' ? (s['3xl'] === '3.5xl' || (!s['3xl'] && this.size3hXlLg)) : this.size3hXl },
    size3hXl4xl() { const s = this.size; return typeof s === 'object' ? (s['4xl'] === '3.5xl' || (!s['4xl'] && this.size3hXl3xl)) : this.size3hXl },
    colorInvert() {
      return this.color === 'invert'
    },
    colorInherit() {
      return this.color === 'inherit'
    },
    colorBase() {
      return this.color === 'base'
    },
  },
})
</script>
