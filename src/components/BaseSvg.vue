<template>
  <svg
    :viewBox="viewBox"
    :class="[
      'inline-block w-em h-em grow-0 shrink-0',
      { [`text-${size}`]: true },
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
type Computed = {}
type Props = {
  viewBox: string
  size: string
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'BaseSvg',

  inheritAttrs: false,

  props: {
    viewBox: { type: String, required: true },
    size: { type: String, default: 'inherit' },
  },
})
</script>
