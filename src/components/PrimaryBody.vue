<template>
  <BaseBox
    :component="component"
    :class="['block w-full p-5 rounded bg-white/75 backdrop-blur shadow-md']"
  >
    <slot />
  </BaseBox>
</template>

<script lang="ts">
import { PropType } from 'vue'

type Component = 'article' | 'div' | 'p' | 'span'

export default defineNuxtComponent({
  name: 'PrimaryBody',

  inheritAttrs: false,

  props: {
    component: { type: String as PropType<Component>, default: 'span' },
  },
})
</script>
