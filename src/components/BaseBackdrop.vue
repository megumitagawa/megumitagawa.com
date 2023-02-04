<!--
Inspired by MUI
https://mui.com/material-ui/api/backdrop/
-->

<template>
  <Teleport to="body">
    <component
      :is="component"
      :class="[
        'fixed inset-0 z-20 flex justify-center items-center',
        'overflow-hidden bg-white/90 transition-visibility-opacity',
        { invisible: !open, 'opacity-0': !open },
      ]"
      v-bind="$attrs"
    >
      <slot />
    </component>
  </Teleport>
</template>

<script lang="ts">
import { PropType } from 'vue'

type Component = 'div' | 'span'

export default defineNuxtComponent({
  name: 'BaseBackdrop',

  inheritAttrs: false,

  props: {
    component: { type: String as PropType<Component>, default: 'span' },
    open: { type: Boolean, default: false },
  },
})
</script>
