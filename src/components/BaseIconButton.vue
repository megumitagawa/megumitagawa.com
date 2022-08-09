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
        'p-2.5': size2hXlXs, 'lg:p-2.5': size2hXlLg, '3xl:p-2.5': size2hXl3xl, '4xl:p-2.5': size2hXl4xl,
        'p-3.5': size3hXlXs, 'lg:p-3.5': size3hXlLg, '3xl:p-3.5': size3hXl3xl, '4xl:p-3.5': size3hXl4xl,
        'bg-lime': colorInfo && !disabled,
        'bg-lightgray': colorInfo && disabled,
        'bg-white/75': colorBase || colorInherit,
        'backdrop-blur': blurred,
        'text-inherit': colorInherit,
        'text-white': colorInfo,
        'text-black': colorBase && !disabled,
        'text-lightgray': colorBase && disabled,
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
  size2hXl: boolean, size2hXlXs: boolean, size2hXlLg: boolean, size2hXl3xl: boolean, size2hXl4xl: boolean,
  size3hXl: boolean, size3hXlXs: boolean, size3hXlLg: boolean, size3hXl3xl: boolean, size3hXl4xl: boolean,
  colorInfo: boolean
  colorInherit: boolean
  colorBase: boolean
}
type Props = {
  component: string
  fullWidth: boolean
  fullHeight: boolean
  disabled: boolean
  size: Size | { [key in keyof typeof theme.screens]?: Size }
  color: 'info' | 'inherit' | 'base'
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
      validator: (value) => ['info', 'inherit', 'base'].includes(value),
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
    colorInfo() {
      return this.color === 'info'
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
