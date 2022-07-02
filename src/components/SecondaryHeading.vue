<template>
  <BaseBox :component="component" class="block w-full">
    <slot />
  </BaseBox>
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
  name: 'SecondaryHeading',

  inheritAttrs: false,

  props: {
    component: { type: String, default: 'span' },
  },
})
</script>
