<!--
Inspired by MUI
https://mui.com/material-ui/api/backdrop/
-->

<template>
  <div
    v-if="open"
    class="absolute inset-0 z-10 flex justify-center items-center overflow-hidden bg-white/75"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {}
type Methods = {}
type Computed = {}
type Props = {
  open: boolean
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'BaseBackdrop',

  props: {
    open: { type: Boolean, default: false },
  },
})
</script>
