<template>
  <BaseSvg viewBox="0 0 12 12" v-bind="$attrs" v-on="$listeners">
    <circle cx="6" cy="6" r="3" fill="currentColor" />
  </BaseSvg>
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {}
type Methods = {}
type Computed = {}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'SingleDotIcon',

  inheritAttrs: false,
})
</script>
