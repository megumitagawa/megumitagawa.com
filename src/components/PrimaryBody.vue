<template>
  <BaseBox
    :component="component"
    :class="['block w-full p-5 rounded bg-white/75 backdrop-blur shadow-md']"
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
  name: 'PrimaryBody',

  inheritAttrs: false,

  props: {
    component: { type: String, default: 'span' },
  },
})
</script>
