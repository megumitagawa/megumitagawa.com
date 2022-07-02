<template>
  <BaseSvg :size="size" viewBox="0 0 20 20" v-bind="$attrs" v-on="$listeners">
    <circle cx="3" cy="10" r="3" fill="currentColor" />
    <circle cx="12" cy="10" r="2" fill="currentColor" />
    <circle cx="19" cy="10" r="1" fill="currentColor" />
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
  name: 'LeftTripleDotsIcon',

  inheritAttrs: false,

  props: {
    size: { type: String, default: 'inherit' },
  },
})
</script>
