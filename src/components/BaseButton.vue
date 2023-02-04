<template>
  <component
    :is="disableableComponent"
    :disabled="nullableDisabled"
    :class="[
      'relative flex justify-center items-center transition',
      // prettier-ignore
      {
        'w-full': fullWidthXs, 'lg:w-full': fullWidthLg, '3xl:w-full': fullWidth3xl, '4xl:w-full': fullWidth4xl,
        'w-auto': !fullWidthXs && textXs, 'lg:w-auto': !fullWidthLg && textLg, '3xl:w-auto': !fullWidth3xl && text3xl, '4xl:w-auto': !fullWidth4xl && text4xl,
        'w-25': !fullWidthXs && !textXs && sizeXsXs, 'lg:w-25': !fullWidthLg && !textLg && sizeXsLg, '3xl:w-25': !fullWidth3xl && !text3xl && sizeXs3xl, '4xl:w-25': !fullWidth4xl && !text4xl && sizeXs4xl,
        'h-full': fullHeight,
        'p-0': textXs, 'lg:p-0': textLg, '3xl:p-0': text3xl, '4xl:p-0': text4xl,
        'p-2.5': !textXs, 'lg:p-2.5': !textLg, '3xl:p-2.5': !text3xl, '4xl:p-2.5': !text4xl,
        'grow-0': !fullWidthXs, 'lg:grow-0': !fullWidthLg, '3xl:grow-0': !fullWidth3xl, '4xl:grow-0': !fullWidth4xl,
        'shrink-0': !fullWidthXs, 'lg:shrink-0': !fullWidthLg, '3xl:shrink-0': !fullWidth3xl, '4xl:shrink-0': !fullWidth4xl,
        'text-base': !textXs || sizeBaseXs, 'lg:text-base': !textLg || sizeBaseLg, '3xl:text-base': !text3xl || sizeBase3xl, '4xl:text-base': !text4xl || sizeBase4xl,
        'text-xl': textXs && sizeXlXs, 'lg:text-xl': textLg && sizeXlLg, '3xl:text-xl': text3xl && sizeXl3xl, '4xl:text-xl': text4xl && sizeXl4xl,
        'text-2xl': textXs && size2xlXs, 'lg:text-2xl': textLg && size2xlLg, '3xl:text-2xl': text3xl && size2xl3xl, '4xl:text-2xl': text4xl && size2xl4xl,
        'text-2.5xl': textXs && size2hxlXs, 'lg:text-2.5xl': textLg && size2hxlLg, '3xl:text-2.5xl': text3xl && size2hxl3xl, '4xl:text-2.5xl': text4xl && size2hxl4xl,
        'rounded-none': textXs, 'lg:rounded-none': textLg, '3xl:rounded-none': text3xl, '4xl:rounded-none': text4xl,
        rounded: !textXs, 'lg:rounded': !textLg, '3xl:rounded': !text3xl, '4xl:rounded': !text4xl,
        'bg-transparent': textXs, 'lg:bg-transparent': textLg, '3xl:bg-transparent': text3xl, '4xl:bg-transparent': text4xl,
        'bg-white/75': !textXs && !opaque && (colorBaseXs || colorPaleXs), 'lg:bg-white/75': !textLg && !opaque && (colorBaseLg || colorPaleLg), '3xl:bg-white/75': !text3xl && !opaque && (colorBase3xl || colorPale3xl), '4xl:bg-white/75': !text4xl && !opaque && (colorBase4xl || colorPale4xl),
        'bg-white': !textXs && opaque && (colorBaseXs || colorPaleXs), 'lg:bg-white': !textLg && opaque && (colorBaseLg || colorPaleLg), '3xl:bg-white': !text3xl && opaque && (colorBase3xl || colorPale3xl), '4xl:bg-white': !text4xl && opaque && (colorBase4xl || colorPale4xl),
        'bg-lime': !textXs && colorInfoXs && !disabled, 'lg:bg-lime': !textLg && colorInfoLg && !disabled, '3xl:bg-lime': !text3xl && colorInfo3xl && !disabled, '4xl:bg-lime': !text4xl && colorInfo4xl && !disabled,
        'bg-lightgray': !textXs && colorInfoXs && disabled, 'lg:bg-lightgray': !textLg && colorInfoLg && disabled, '3xl:bg-lightgray': !text3xl && colorInfo3xl && disabled, '4xl:bg-lightgray': !text4xl && colorInfo4xl && disabled,
        'backdrop-blur-none': textXs && blurred, 'lg:backdrop-blur-none': textLg && blurred, '3xl:backdrop-blur-none': text3xl && blurred, '4xl:backdrop-blur-none': text4xl && blurred,
        'backdrop-blur': !textXs && blurred, 'lg:backdrop-blur': !textLg && blurred, '3xl:backdrop-blur': !text3xl && blurred, '4xl:backdrop-blur': !text4xl && blurred,
        'text-black': colorBaseXs && !disabled, 'lg:text-black': colorBaseLg && !disabled, '3xl:text-black': colorBase3xl && !disabled, '4xl:text-black': colorBase4xl && !disabled,
        'text-lightgray': colorBaseXs && disabled, 'lg:text-lightgray': colorBaseLg && disabled, '3xl:text-lightgray': colorBase3xl && disabled, '4xl:text-lightgray': colorBase4xl && disabled,
        'text-gray': colorPaleXs, 'lg:text-gray': colorPaleLg, '3xl:text-gray': colorPale3xl, '4xl:text-gray': colorPale4xl,
        'text-white': colorInfoXs, 'lg:text-white': colorInfoLg, '3xl:text-white': colorInfo3xl, '4xl:text-white': colorInfo4xl,
        'pointer-device:hover:text-black': colorBaseXs && !disabled && !textXs, 'lg:pointer-device:hover:text-black': colorBaseLg && !disabled && !textLg, '3xl:pointer-device:hover:text-black': colorBase3xl && !disabled && !text3xl, '4xl:pointer-device:hover:text-black': colorBase4xl && !disabled && !text4xl,
        'pointer-device:hover:text-gray': colorPaleXs && !disabled && !textXs, 'lg:pointer-device:hover:text-gray': colorPaleLg && !disabled && !textLg, '3xl:pointer-device:hover:text-gray': colorPale3xl && !disabled && !text3xl, '4xl:pointer-device:hover:text-gray': colorPale4xl && !disabled && !text4xl,
        'pointer-device:hover:text-white': colorInfoXs && !disabled && !textXs, 'lg:pointer-device:hover:text-white': colorInfoLg && !disabled && !textLg, '3xl:pointer-device:hover:text-white': colorInfo3xl && !disabled && !text3xl, '4xl:pointer-device:hover:text-white': colorInfo4xl && !disabled && !text4xl,
        'pointer-device:hover:text-lime': !disabled && textXs, 'lg:pointer-device:hover:text-lime': !disabled && textLg, '3xl:pointer-device:hover:text-lime': !disabled && text3xl, '4xl:pointer-device:hover:text-lime': !disabled && text4xl,
        'shadow-none': textXs, 'lg:shadow-none': textLg, '3xl:shadow-none': text3xl, '4xl:shadow-none': text4xl,
        'shadow-md': !textXs, 'lg:shadow-md': !textLg, '3xl:shadow-md': !text3xl, '4xl:shadow-md': !text4xl,
        'pointer-device:hover:shadow-none': !disabled && !textXs, 'lg:pointer-device:hover:shadow-none': !disabled && !textLg, '3xl:pointer-device:hover:shadow-none': !disabled && !text3xl, '4xl:pointer-device:hover:shadow-none': !disabled && !text4xl,
        'drop-shadow-none': !textXs, 'lg:drop-shadow-none': !textLg, '3xl:drop-shadow-none': !text3xl, '4xl:drop-shadow-none': !text4xl,
        'drop-shadow-md': textXs, 'lg:drop-shadow-md': textLg, '3xl:drop-shadow-md': text3xl, '4xl:drop-shadow-md': text4xl,
        'pointer-device:hover:drop-shadow-none': !disabled && textXs, 'lg:pointer-device:hover:drop-shadow-none': !disabled && textLg, '3xl:pointer-device:hover:drop-shadow-none': !disabled && text3xl, '4xl:pointer-device:hover:drop-shadow-none': !disabled && text4xl,
        'pointer-device:hover:translate-y-0': !disabled && textXs, 'lg:pointer-device:hover:translate-y-0': !disabled && textLg, '3xl:pointer-device:hover:translate-y-0': !disabled && text3xl, '4xl:pointer-device:hover:translate-y-0': !disabled && text4xl,
        'pointer-device:hover:translate-y-0.5': !disabled && !textXs, 'lg:pointer-device:hover:translate-y-0.5': !disabled && !textLg, '3xl:pointer-device:hover:translate-y-0.5': !disabled && !text3xl, '4xl:pointer-device:hover:translate-y-0.5': !disabled && !text4xl,
      },
    ]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <span class="absolute top-1/2 left-4 -translate-y-1/2">
      <slot name="startIcon" />
    </span>
    <slot />
    <span class="absolute top-1/2 right-4 -translate-y-1/2">
      <slot name="endIcon" />
    </span>
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
import { theme } from '@/../tailwind.config'

type Size = 'xs' | 'base' | 'xl' | '2xl' | '2.5xl'
type Color = 'base' | 'pale' | 'info'

type Data = {}
type Methods = {}
// prettier-ignore
type Computed = {
  fullWidthXs: boolean, fullWidthLg: boolean, fullWidth3xl: boolean, fullWidth4xl: boolean,
  disableableComponent: string
  nullableDisabled: boolean | null
  sizeXs: boolean, sizeXsXs: boolean, sizeXsLg: boolean, sizeXs3xl: boolean, sizeXs4xl: boolean
  sizeBase: boolean, sizeBaseXs: boolean, sizeBaseLg: boolean, sizeBase3xl: boolean, sizeBase4xl: boolean
  sizeXl: boolean, sizeXlXs: boolean, sizeXlLg: boolean, sizeXl3xl: boolean, sizeXl4xl: boolean
  size2xl: boolean, size2xlXs: boolean, size2xlLg: boolean, size2xl3xl: boolean, size2xl4xl: boolean
  size2hxl: boolean, size2hxlXs: boolean, size2hxlLg: boolean, size2hxl3xl: boolean, size2hxl4xl: boolean
  colorBase: boolean, colorBaseXs: boolean, colorBaseLg: boolean, colorBase3xl: boolean, colorBase4xl: boolean,
  colorPale: boolean, colorPaleXs: boolean, colorPaleLg: boolean, colorPale3xl: boolean, colorPale4xl: boolean,
  colorInfo: boolean, colorInfoXs: boolean, colorInfoLg: boolean, colorInfo3xl: boolean, colorInfo4xl: boolean,
  textXs: boolean, textLg: boolean, text3xl: boolean, text4xl: boolean,
}
type Props = {
  component: string
  fullWidth: boolean | { [key in keyof typeof theme.screens]?: boolean }
  fullHeight: boolean
  disabled: boolean
  size: Size | { [key in keyof typeof theme.screens]?: Size }
  color: Color | { [key in keyof typeof theme.screens]?: Color }
  blurred: boolean
  text: boolean | { [key in keyof typeof theme.screens]?: boolean }
  opaque: boolean
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'BaseButton',

  inheritAttrs: false,

  props: {
    component: { type: String, default: 'button' },
    // prettier-ignore
    fullWidth: {
      validator: (value) => typeof value === 'object'
        ? Object.entries(value).every(
            ([key, value]) =>
              Object.keys(theme.screens).includes(key) &&
              typeof value === 'boolean'
          )
        : typeof value === 'boolean',
      default: false,
    },
    fullHeight: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    // prettier-ignore
    size: {
      validator: (value) => typeof value === 'object'
        ? Object.entries(value).every(
            ([key, value]) =>
              Object.keys(theme.screens).includes(key) &&
              ['xs', 'base', 'xl', '2xl', '2.5xl'].includes(value)
          )
        : ['xs', 'base', 'xl', '2xl', '2.5xl'].includes(value),
      default: 'base',
    },
    // prettier-ignore
    color: {
      validator: (value) => typeof value === 'object'
        ? Object.entries(value).every(
            ([key, value]) =>
              Object.keys(theme.screens).includes(key) &&
              ['base', 'pale', 'info'].includes(value)
          )
        : ['base', 'pale', 'info'].includes(value),
      default: 'base',
    },
    blurred: { type: Boolean, default: true },
    // prettier-ignore
    text: {
      validator: (value) => typeof value === 'object'
        ? Object.entries(value).every(
            ([key, value]) =>
              Object.keys(theme.screens).includes(key) &&
              typeof value === 'boolean'
          )
        : typeof value === 'boolean',
      default: false,
    },
    opaque: { type: Boolean, default: false },
  },

  // prettier-ignore
  computed: {
    fullWidthXs() { const f = this.fullWidth; return typeof f === 'object' ? !!f.xs : f },
    fullWidthLg() { const f = this.fullWidth; return typeof f === 'object' ? (f.lg ?? this.fullWidthXs) : f },
    fullWidth3xl() { const f = this.fullWidth; return typeof f === 'object' ? (f['3xl'] ?? this.fullWidthLg) : f },
    fullWidth4xl() { const f = this.fullWidth; return typeof f === 'object' ? (f['4xl'] ?? this.fullWidth3xl) : f },
    // Force button element if disabled
    disableableComponent() {
      return this.disabled ? 'button' : this.component
    },
    // Don't set disabled if not disabled
    nullableDisabled() {
      return this.disabled || null
    },
    sizeXs() { return this.size === 'xs' },
    sizeXsXs() { const s = this.size; return typeof s === 'object' ? s.xs === 'xs' : this.sizeXs },
    sizeXsLg() { const s = this.size; return typeof s === 'object' ? (s.lg === 'xs' || (!s.lg && this.sizeXsXs)) : this.sizeXs },
    sizeXs3xl() { const s = this.size; return typeof s === 'object' ? (s['3xl'] === 'xs' || (!s['3xl'] && this.sizeXsLg)) : this.sizeXs },
    sizeXs4xl() { const s = this.size; return typeof s === 'object' ? (s['4xl'] === 'xs' || (!s['4xl'] && this.sizeXs3xl)) : this.sizeXs },
    sizeBase() { return this.size === 'base' },
    sizeBaseXs() { const s = this.size; return typeof s === 'object' ? s.xs === 'base' : this.sizeBase },
    sizeBaseLg() { const s = this.size; return typeof s === 'object' ? (s.lg === 'base' || (!s.lg && this.sizeBaseXs)) : this.sizeBase },
    sizeBase3xl() { const s = this.size; return typeof s === 'object' ? (s['3xl'] === 'base' || (!s['3xl'] && this.sizeBaseLg)) : this.sizeBase },
    sizeBase4xl() { const s = this.size; return typeof s === 'object' ? (s['4xl'] === 'base' || (!s['4xl'] && this.sizeBase3xl)) : this.sizeBase },
    sizeXl() { return this.size === 'xl' },
    sizeXlXs() { const s = this.size; return typeof s === 'object' ? s.xs === 'xl' : this.sizeXl },
    sizeXlLg() { const s = this.size; return typeof s === 'object' ? (s.lg === 'xl' || (!s.lg && this.sizeXlXs)) : this.sizeXl },
    sizeXl3xl() { const s = this.size; return typeof s === 'object' ? (s['3xl'] === 'xl' || (!s['3xl'] && this.sizeXlLg)) : this.sizeXl },
    sizeXl4xl() { const s = this.size; return typeof s === 'object' ? (s['4xl'] === 'xl' || (!s['4xl'] && this.sizeXl3xl)) : this.sizeXl },
    size2xl() { return this.size === '2xl' },
    size2xlXs() { const s = this.size; return typeof s === 'object' ? s.xs === '2xl' : this.size2xl },
    size2xlLg() { const s = this.size; return typeof s === 'object' ? (s.lg === '2xl' || (!s.lg && this.size2xlXs)) : this.size2xl },
    size2xl3xl() { const s = this.size; return typeof s === 'object' ? (s['3xl'] === '2xl' || (!s['3xl'] && this.size2xlLg)) : this.size2xl },
    size2xl4xl() { const s = this.size; return typeof s === 'object' ? (s['4xl'] === '2xl' || (!s['4xl'] && this.size2xl3xl)) : this.size2xl },
    size2hxl() { return this.size === '2.5xl' },
    size2hxlXs() { const s = this.size; return typeof s === 'object' ? s.xs === '2.5xl' : this.size2hxl },
    size2hxlLg() { const s = this.size; return typeof s === 'object' ? (s.lg === '2.5xl' || (!s.lg && this.size2hxlXs)) : this.size2hxl },
    size2hxl3xl() { const s = this.size; return typeof s === 'object' ? (s['3xl'] === '2.5xl' || (!s['3xl'] && this.size2hxlLg)) : this.size2hxl },
    size2hxl4xl() { const s = this.size; return typeof s === 'object' ? (s['4xl'] === '2.5xl' || (!s['4xl'] && this.size2hxl3xl)) : this.size2hxl },
    colorBase() { return this.color === 'base' },
    colorBaseXs() { const c = this.color; return typeof c === 'object' ? c.xs === 'base' : this.colorBase },
    colorBaseLg() { const c = this.color; return typeof c === 'object' ? (c.lg === 'base' || (!c.lg && this.colorBaseXs)) : this.colorBase },
    colorBase3xl() { const c = this.color; return typeof c === 'object' ? (c['3xl'] === 'base' || (!c['3xl'] && this.colorBaseLg)) : this.colorBase },
    colorBase4xl() { const c = this.color; return typeof c === 'object' ? (c['4xl'] === 'base' || (!c['4xl'] && this.colorBase3xl)) : this.colorBase },
    colorPale() { return this.color === 'pale' },
    colorPaleXs() { const c = this.color; return typeof c === 'object' ? c.xs === 'pale' : this.colorPale },
    colorPaleLg() { const c = this.color; return typeof c === 'object' ? (c.lg === 'pale' || (!c.lg && this.colorPaleXs)) : this.colorPale },
    colorPale3xl() { const c = this.color; return typeof c === 'object' ? (c['3xl'] === 'pale' || (!c['3xl'] && this.colorPaleLg)) : this.colorPale },
    colorPale4xl() { const c = this.color; return typeof c === 'object' ? (c['4xl'] === 'pale' || (!c['4xl'] && this.colorPale3xl)) : this.colorPale },
    colorInfo() { return this.color === 'info' },
    colorInfoXs() { const c = this.color; return typeof c === 'object' ? c.xs === 'info' : this.colorInfo },
    colorInfoLg() { const c = this.color; return typeof c === 'object' ? (c.lg === 'info' || (!c.lg && this.colorInfoXs)) : this.colorInfo },
    colorInfo3xl() { const c = this.color; return typeof c === 'object' ? (c['3xl'] === 'info' || (!c['3xl'] && this.colorInfoLg)) : this.colorInfo },
    colorInfo4xl() { const c = this.color; return typeof c === 'object' ? (c['4xl'] === 'info' || (!c['4xl'] && this.colorInfo3xl)) : this.colorInfo },
    textXs() { const t = this.text; return typeof t === 'object' ? !!t.xs : t },
    textLg() { const t = this.text; return typeof t === 'object' ? (t.lg ?? this.textXs) : t },
    text3xl() { const t = this.text; return typeof t === 'object' ? (t['3xl'] ?? this.textLg) : t },
    text4xl() { const t = this.text; return typeof t === 'object' ? (t['4xl'] ?? this.text3xl) : t },
  },
})
</script>
