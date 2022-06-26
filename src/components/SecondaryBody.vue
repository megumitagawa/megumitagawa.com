<template>
  <!-- eslint-disable vue/no-v-html -->
  <component :is="component" class="block w-full" v-html="content" />
  <!-- eslint-enable vue/no-v-html -->
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {}
type Methods = {}
type Computed = {}
type Props = {
  component: string
  content: string
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'SecondaryBody',

  inheritAttrs: false,

  props: {
    component: { type: String, default: 'span' },
    content: { type: String, default: '' },
  },
})
</script>
