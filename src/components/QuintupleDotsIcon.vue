<template>
  <BaseSvg viewBox="0 0 34 34" v-bind="$attrs" v-on="$listeners">
    <circle cx="17" cy="17" r="3" fill="currentColor" />
    <circle cx="8" cy="17" r="2" fill="currentColor" />
    <circle cx="26" cy="17" r="2" fill="currentColor" />
    <circle cx="1" cy="17" r="1" fill="currentColor" />
    <circle cx="33" cy="17" r="1" fill="currentColor" />
  </BaseSvg>
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {}
type Methods = {}
type Computed = {}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'QuintupleDotsIcon',

  inheritAttrs: false,
})
</script>
