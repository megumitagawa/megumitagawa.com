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
import { PropType } from 'vue'

type Component =
  | 'article'
  | 'div'
  | 'footer'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'hr'
  | 'option'
  | 'p'
  | 'span'

export default defineNuxtComponent({
  name: 'BaseBox',

  inheritAttrs: false,

  props: {
    component: { type: String as PropType<Component>, default: 'span' },
  },
})
</script>
