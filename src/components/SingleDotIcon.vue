<template>
  <BaseSvg :size="size" viewBox="0 0 10 10" v-bind="$attrs" v-on="$listeners">
    <circle cx="5" cy="5" r="3" fill="currentColor" />
  </BaseSvg>
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {}
type Methods = {}
type Computed = {}
type Props = {
  size: string
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'SingleDotIcon',

  inheritAttrs: false,

  props: {
    size: { type: String, default: 'inherit' },
  },
})
</script>
