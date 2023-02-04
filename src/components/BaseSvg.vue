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
        'text-2.5xl': size2hxlXs, 'lg:text-2.5xl': size2hxlLg, '3xl:text-2.5xl': size2hxl3xl, '4xl:text-2.5xl': size2hxl4xl,
        'text-3.5xl': size3hxlXs, 'lg:text-3.5xl': size3hxlLg, '3xl:text-3.5xl': size3hxl3xl, '4xl:text-3.5xl': size3hxl4xl,
        'text-inherit': colorInherit,
        'text-white': colorInvert,
        'text-black': colorBase,
      },
    ]"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <slot />
  </svg>
</template>

<script lang="ts">
import { PropType } from 'vue'

type ScreenKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
type Size = 'xs' | 'xl' | '2.5xl' | '3.5xl'
type Color = 'invert' | 'inherit' | 'base'

export default defineNuxtComponent({
  name: 'BaseSvg',

  inheritAttrs: false,

  props: {
    viewBox: { type: String, required: true },
    fullWidth: { type: Boolean, default: false },
    fullHeight: { type: Boolean, default: false },
    size: {
      type: [Object, String] as PropType<{ [key in ScreenKey]?: Size } | Size>,
      default: 'xs',
    },
    color: {
      type: String as PropType<Color>,
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
    size2hxl() { return this.size === '2.5xl' },
    size2hxlXs() { const s = this.size; return typeof s === 'object' ? s.xs === '2.5xl' : this.size2hxl },
    size2hxlLg() { const s = this.size; return typeof s === 'object' ? (s.lg === '2.5xl' || (!s.lg && this.size2hxlXs)) : this.size2hxl },
    size2hxl3xl() { const s = this.size; return typeof s === 'object' ? (s['3xl'] === '2.5xl' || (!s['3xl'] && this.size2hxlLg)) : this.size2hxl },
    size2hxl4xl() { const s = this.size; return typeof s === 'object' ? (s['4xl'] === '2.5xl' || (!s['4xl'] && this.size2hxl3xl)) : this.size2hxl },
    size3hxl() { return this.size === '3.5xl' },
    size3hxlXs() { const s = this.size; return typeof s === 'object' ? s.xs === '3.5xl' : this.size3hxl },
    size3hxlLg() { const s = this.size; return typeof s === 'object' ? (s.lg === '3.5xl' || (!s.lg && this.size3hxlXs)) : this.size3hxl },
    size3hxl3xl() { const s = this.size; return typeof s === 'object' ? (s['3xl'] === '3.5xl' || (!s['3xl'] && this.size3hxlLg)) : this.size3hxl },
    size3hxl4xl() { const s = this.size; return typeof s === 'object' ? (s['4xl'] === '3.5xl' || (!s['4xl'] && this.size3hxl3xl)) : this.size3hxl },
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
