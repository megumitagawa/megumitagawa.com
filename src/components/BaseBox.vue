<!--
Inspired by MUI
https://mui.com/material-ui/api/box/
-->

<template>
  <component :is="component" v-bind="$attrs" v-on="$listeners">
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {}
type Methods = {}
type Computed = {}
type Props = {
  component: string
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'BaseBox',

  inheritAttrs: false,

  props: {
    component: { type: String, default: 'span' },
  },
})
</script>
