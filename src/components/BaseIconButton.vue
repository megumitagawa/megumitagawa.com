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
      {
        'w-full': fullWidth,
        'h-full': fullHeight,
        'p-2.5': size2hXl,
        'p-3.5': size3hXl,
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

type Data = {}
type Methods = {}
type Computed = {
  disableableComponent: string
  nullableDisabled: boolean | null
  size2hXl: boolean
  size3hXl: boolean
  colorInfo: boolean
  colorInherit: boolean
  colorBase: boolean
}
type Props = {
  component: string
  fullWidth: boolean
  fullHeight: boolean
  disabled: boolean
  size: '2.5xl' | '3.5xl'
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
    size: {
      validator: (value) => ['2.5xl', '3.5xl'].includes(value),
      default: '2.5xl',
    },
    color: {
      validator: (value) => ['info', 'inherit', 'base'].includes(value),
      default: 'base',
    },
    blurred: { type: Boolean, default: true },
  },

  computed: {
    // Force button element if disabled
    disableableComponent() {
      return this.disabled ? 'button' : this.component
    },
    // Don't set disabled if not disabled
    nullableDisabled() {
      return this.disabled || null
    },
    size2hXl() {
      return this.size === '2.5xl'
    },
    size3hXl() {
      return this.size === '3.5xl'
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
  },
})
</script>
