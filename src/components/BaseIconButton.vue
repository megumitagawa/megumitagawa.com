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
      {
        'w-full': fullWidth,
        'h-full': fullHeight,
        'p-1': sizeXs,
        'p-2': sizeXl,
        'p-2.5': size2hXl,
        'p-3.5': size3hXl,
        'bg-inherit': colorInherit,
        'bg-lime': colorInfo,
        'bg-white/75': colorDefault,
        'backdrop-blur': blurred,
        'text-inherit': colorInherit,
        'text-white': colorInfo,
        'text-black': colorDefault,
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
  sizeXs: boolean
  sizeXl: boolean
  size2hXl: boolean
  size3hXl: boolean
  colorInfo: boolean
  colorInherit: boolean
  colorDefault: boolean
}
type Props = {
  component: string
  fullWidth: boolean
  fullHeight: boolean
  disabled: boolean
  size: 'xs' | 'xl' | '2.5xl' | '3.5xl'
  color: 'info' | 'inherit' | 'default'
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
      validator: (value) => ['xs', 'xl', '2.5xl', '3.5xl'].includes(value),
      default: 'xl',
    },
    color: {
      validator: (value) => ['info', 'inherit', 'default'].includes(value),
      default: 'default',
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
    sizeXs() {
      return this.size === 'xs'
    },
    sizeXl() {
      return this.size === 'xl'
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
    colorDefault() {
      return this.color === 'default'
    },
  },
})
</script>
