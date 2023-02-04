<!--
Inspired by MUI
https://mui.com/material-ui/api/icon-button/
-->

<template>
  <component
    :is="disableableComponent"
    :disabled="nullableDisabled"
    :class="[
      'flex justify-center items-center grow-0 shrink-0 rounded-full shadow-md',
      'transition',
      // prettier-ignore
      {
        'w-full': fullWidth,
        'h-full': fullHeight,
        'p-2.5': size2hxlXs, 'lg:p-2.5': size2hxlLg, '3xl:p-2.5': size2hxl3xl, '4xl:p-2.5': size2hxl4xl,
        'p-3.5': size3hxlXs, 'lg:p-3.5': size3hxlLg, '3xl:p-3.5': size3hxl3xl, '4xl:p-3.5': size3hxl4xl,
        'bg-white/75': colorBase,
        'bg-lime': colorInfo && !disabled,
        'bg-lightgray': colorInfo && disabled,
        'backdrop-blur': blurred,
        'text-black': colorBase && !disabled,
        'text-lightgray': colorBase && disabled,
        'text-white': colorInfo,
        'pointer-device:hover:shadow-none': !nullableDisabled,
        'pointer-device:hover:translate-y-0.5': !nullableDisabled,
      },
    ]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
import { theme } from '@/../tailwind.config'

type Size = '2.5xl' | '3.5xl'

type Data = {}
type Methods = {}
// prettier-ignore
type Computed = {
  disableableComponent: string
  nullableDisabled: boolean | null
  size2hxl: boolean, size2hxlXs: boolean, size2hxlLg: boolean, size2hxl3xl: boolean, size2hxl4xl: boolean,
  size3hxl: boolean, size3hxlXs: boolean, size3hxlLg: boolean, size3hxl3xl: boolean, size3hxl4xl: boolean,
  colorInfo: boolean
  colorBase: boolean
}
type Props = {
  component: string
  fullWidth: boolean
  fullHeight: boolean
  disabled: boolean
  size: Size | { [key in keyof typeof theme.screens]?: Size }
  color: 'base' | 'info'
  blurred: boolean
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'BaseIconButton',

  inheritAttrs: false,

  props: {
    component: { type: String, default: 'button' },
    fullWidth: { type: Boolean, default: false },
    fullHeight: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    // prettier-ignore
    size: {
      validator: (value) => typeof value === 'object'
        ? Object.entries(value).every(
            ([key, value]) =>
              Object.keys(theme.screens).includes(key) &&
              ['2.5xl', '3.5xl'].includes(value)
          )
        : ['2.5xl', '3.5xl'].includes(value),
      default: '2.5xl',
    },
    color: {
      validator: (value) => ['base', 'info'].includes(value),
      default: 'base',
    },
    blurred: { type: Boolean, default: true },
  },

  // prettier-ignore
  computed: {
    // Force button element if disabled
    disableableComponent() {
      return this.disabled ? 'button' : this.component
    },
    // Don't set disabled if not disabled
    nullableDisabled() {
      return this.disabled || null
    },
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
    colorBase() {
      return this.color === 'base'
    },
    colorInfo() {
      return this.color === 'info'
    },
  },
})
</script>
