<!--
Inspired by MUI
https://mui.com/material-ui/api/box/
-->

<template>
  <component :is="component" v-bind="$attrs">
    <slot />
  </component>
</template>

<script lang="ts">
export default defineNuxtComponent({
  name: 'BaseBox',

  inheritAttrs: false,

  props: {
    component: { type: String, default: 'span' },
  },
})
</script>
