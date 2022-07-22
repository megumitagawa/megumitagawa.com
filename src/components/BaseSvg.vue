<template>
  <svg
    :viewBox="viewBox"
    :class="[
      'block grow-0 shrink-0',
      {
        'w-em': !fullWidth,
        'w-full': fullWidth,
        'h-em': !fullHeight,
        'h-full': fullHeight,
        'text-xs': sizeXs,
        'text-xl': sizeXl,
        'text-2.5xl': size2hXl,
        'text-3.5xl': size3hXl,
        'text-inherit': colorInherit,
        'text-white': colorInvert,
        'text-black': colorDefault,
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

type Data = {}
type Methods = {}
type Computed = {
  sizeXs: boolean
  sizeXl: boolean
  size2hXl: boolean
  size3hXl: boolean
  colorInvert: boolean
  colorInherit: boolean
  colorDefault: boolean
}
type Props = {
  viewBox: string
  fullWidth: boolean
  fullHeight: boolean
  size: 'xs' | 'xl' | '2.5xl' | '3.5xl'
  color: 'invert' | 'inherit' | 'default'
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'BaseSvg',

  inheritAttrs: false,

  props: {
    viewBox: { type: String, required: true },
    fullWidth: { type: Boolean, default: false },
    fullHeight: { type: Boolean, default: false },
    size: {
      validator: (value) => ['xs', 'xl', '2.5xl', '3.5xl'].includes(value),
      default: 'xs',
    },
    color: {
      validator: (value) => ['invert', 'inherit', 'default'].includes(value),
      default: 'default',
    },
  },

  computed: {
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
    colorInvert() {
      return this.color === 'invert'
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
