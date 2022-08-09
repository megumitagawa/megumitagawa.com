<template>
  <component
    :is="disableableComponent"
    :disabled="nullableDisabled"
    :class="[
      'relative flex justify-center items-center transition',
      // prettier-ignore
      {
        'w-full': fullWidthXs, 'lg:w-full': fullWidthLg, '3xl:w-full': fullWidth3xl, '4xl:w-full': fullWidth4xl,
        'w-auto': !fullWidthXs && sizeAuto, 'lg:w-auto': !fullWidthLg && sizeAuto, '3xl:w-auto': !fullWidth3xl && sizeAuto, '4xl:w-auto': !fullWidth4xl && sizeAuto,
        'w-25': !fullWidthXs && sizeXs, 'lg:w-25': !fullWidthLg && sizeXs, '3xl:w-25': !fullWidth3xl && sizeXs, '4xl:w-25': !fullWidth4xl && sizeXs,
        'h-full': fullHeight,
        'p-0': textXs, 'lg:p-0': textLg, '3xl:p-0': text3xl, '4xl:p-0': text4xl,
        'p-2.5': !textXs, 'lg:p-2.5': !textLg, '3xl:p-2.5': !text3xl, '4xl:p-2.5': !text4xl,
        'grow-0': !fullWidthXs, 'lg:grow-0': !fullWidthLg, '3xl:grow-0': !fullWidth3xl, '4xl:grow-0': !fullWidth4xl,
        'shrink-0': !fullWidthXs, 'lg:shrink-0': !fullWidthLg, '3xl:shrink-0': !fullWidth3xl, '4xl:shrink-0': !fullWidth4xl,
        'text-base': !inheritedFontSize,
        'text-inherited-size': inheritedFontSize,
        'rounded-none': textXs, 'lg:rounded-none': textLg, '3xl:rounded-none': text3xl, '4xl:rounded-none': text4xl,
        rounded: !textXs, 'lg:rounded': !textLg, '3xl:rounded': !text3xl, '4xl:rounded': !text4xl,
        'bg-transparent': textXs, 'lg:bg-transparent': textLg, '3xl:bg-transparent': text3xl, '4xl:bg-transparent': text4xl,
        'bg-lime': !textXs && colorInfo && !disabled, 'lg:bg-lime': !textLg && colorInfo && !disabled, '3xl:bg-lime': !text3xl && colorInfo && !disabled, '4xl:bg-lime': !text4xl && colorInfo && !disabled,
        'bg-lightgray': !textXs && colorInfo && disabled, 'lg:bg-lightgray': !textLg && colorInfo && disabled, '3xl:bg-lightgray': !text3xl && colorInfo && disabled, '4xl:bg-lightgray': !text4xl && colorInfo && disabled,
        'bg-white/75': !textXs && (colorBase || colorInherit), 'lg:bg-white/75': !textLg && (colorBase || colorInherit), '3xl:bg-white/75': !text3xl && (colorBase || colorInherit), '4xl:bg-white/75': !text4xl && (colorBase || colorInherit),
        'backdrop-blur-none': textXs && blurred, 'lg:backdrop-blur-none': textLg && blurred, '3xl:backdrop-blur-none': text3xl && blurred, '4xl:backdrop-blur-none': text4xl && blurred,
        'backdrop-blur': !textXs && blurred, 'lg:backdrop-blur': !textLg && blurred, '3xl:backdrop-blur': !text3xl && blurred, '4xl:backdrop-blur': !text4xl && blurred,
        'text-inherit': colorInherit,
        'text-white': colorInfo,
        'text-black': colorBase && !disabled,
        'text-lightgray': colorBase && disabled,
        'pointer-device:hover:text-inherit': colorInherit && !disabled && !textXs, 'lg:pointer-device:hover:text-inherit': colorInherit && !disabled && !textLg, '3xl:pointer-device:hover:text-inherit': colorInherit && !disabled && !text3xl, '4xl:pointer-device:hover:text-inherit': colorInherit && !disabled && !text4xl,
        'pointer-device:hover:text-white': colorInfo && !disabled && !textXs, 'lg:pointer-device:hover:text-white': colorInfo && !disabled && !textLg, '3xl:pointer-device:hover:text-white': colorInfo && !disabled && !text3xl, '4xl:pointer-device:hover:text-white': colorInfo && !disabled && !text4xl,
        'pointer-device:hover:text-black': colorBase && !disabled && !textXs, 'lg:pointer-device:hover:text-black': colorBase && !disabled && !textLg, '3xl:pointer-device:hover:text-black': colorBase && !disabled && !text3xl, '4xl:pointer-device:hover:text-black': colorBase && !disabled && !text4xl,
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

type Data = {}
type Methods = {}
// prettier-ignore
type Computed = {
  fullWidthXs: boolean, fullWidthLg: boolean, fullWidth3xl: boolean, fullWidth4xl: boolean,
  disableableComponent: string
  nullableDisabled: boolean | null
  sizeAuto: boolean
  sizeXs: boolean
  colorInfo: boolean
  colorInherit: boolean
  colorBase: boolean
  textXs: boolean, textLg: boolean, text3xl: boolean, text4xl: boolean,
}
type Props = {
  component: string
  fullWidth: boolean | { [key in keyof typeof theme.screens]?: boolean }
  fullHeight: boolean
  disabled: boolean
  size: 'auto' | 'xs'
  color: 'info' | 'inherit' | 'base'
  blurred: boolean
  text: boolean | { [key in keyof typeof theme.screens]?: boolean }
  inheritedFontSize: boolean
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
    size: {
      validator: (value) => ['auto', 'xs'].includes(value),
      default: 'auto',
    },
    color: {
      validator: (value) => ['info', 'inherit', 'base'].includes(value),
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
    inheritedFontSize: { type: Boolean, default: false },
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
    sizeAuto() {
      return this.size === 'auto'
    },
    sizeXs() {
      return this.size === 'xs'
    },
    colorInfo() {
      return this.color === 'info'
    },
    colorInherit() {
      return this.color === 'inherit'
    },
    colorBase() {
      return this.color === 'base'
    },
    textXs() { const t = this.text; return typeof t === 'object' ? !!t.xs : t },
    textLg() { const t = this.text; return typeof t === 'object' ? (t.lg ?? this.textXs) : t },
    text3xl() { const t = this.text; return typeof t === 'object' ? (t['3xl'] ?? this.textLg) : t },
    text4xl() { const t = this.text; return typeof t === 'object' ? (t['4xl'] ?? this.text3xl) : t },
  },
})
</script>
