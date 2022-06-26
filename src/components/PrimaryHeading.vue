<template>
  <component :is="component" :id="id" class="block w-full">
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
  id: string
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'PrimaryHeading',

  inheritAttrs: false,

  props: {
    component: { type: String, default: 'span' },
    id: { type: String, default: null },
  },
})
</script>
