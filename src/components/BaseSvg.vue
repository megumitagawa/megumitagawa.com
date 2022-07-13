<template>
  <svg
    :viewBox="viewBox"
    :class="[
      'block w-em h-em grow-0 shrink-0',
      {
        'text-inherit': sizeInherit,
        'text-xs': sizeXs,
        'text-xl': sizeXl,
        'text-2.5xl': size2hXl,
        'text-3.5xl': size3hXl,
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
  sizeInherit: boolean
  sizeXs: boolean
  sizeXl: boolean
  size2hXl: boolean
  size3hXl: boolean
}
type Props = {
  viewBox: string
  size: 'inherit' | 'xs' | 'xl' | '2.5xl' | '3.5xl'
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'BaseSvg',

  inheritAttrs: false,

  props: {
    viewBox: { type: String, required: true },
    size: {
      validator: (value) =>
        ['inherit', 'xs', 'xl', '2.5xl', '3.5xl'].includes(value),
      default: 'inherit',
    },
  },

  computed: {
    sizeInherit() {
      return this.size === 'inherit'
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
  },
})
</script>
