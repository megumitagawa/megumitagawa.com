<template>
  <BaseBox
    :component="component"
    class="block w-full text-base border-b border-inherit pb-4.5"
  >
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
