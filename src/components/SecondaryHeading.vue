<template>
  <BaseBox
    :component="component"
    class="block w-full text-base border-b border-inherit pb-4.5"
  >
    <slot />
  </BaseBox>
</template>

<script lang="ts">
import { PropType } from 'vue'

type Component = 'h2' | 'h3' | 'span'

export default defineNuxtComponent({
  name: 'SecondaryHeading',

  inheritAttrs: false,

  props: {
    component: { type: String as PropType<Component>, default: 'span' },
  },
})
</script>
