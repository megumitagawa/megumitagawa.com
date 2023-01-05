<!--
Inspired by MUI
https://mui.com/material-ui/api/box/

Remove slot if component is void element
to avoid hydration children mismatch warning
-->

<template>
  <template v-if="voidElement">
    <component :is="component" v-bind="$attrs" />
  </template>
  <template v-else>
    <component :is="component" v-bind="$attrs">
      <slot />
    </component>
  </template>
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

  computed: {
    voidElement() {
      return this.component === 'hr'
    },
  },
})
</script>
