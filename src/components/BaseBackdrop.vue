<!--
Inspired by MUI
https://mui.com/material-ui/api/backdrop/
-->

<template>
  <div v-if="open" class="base-backdrop">
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

<style lang="postcss" scoped>
.base-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255 255 255 / 75%);
}
</style>
