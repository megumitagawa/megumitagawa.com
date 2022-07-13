<template>
  <BaseSvg viewBox="0 0 20 20" v-bind="$attrs" v-on="$listeners">
    <circle cx="17" cy="10" r="3" fill="currentColor" />
    <circle cx="8" cy="10" r="2" fill="currentColor" />
    <circle cx="1" cy="10" r="1" fill="currentColor" />
  </BaseSvg>
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {}
type Methods = {}
type Computed = {}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'RightTripleDotsIcon',

  inheritAttrs: false,
})
</script>
