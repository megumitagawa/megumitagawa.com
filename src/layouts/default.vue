<template>
  <div>
    <GlobalHeader />
    <Nuxt />
    <GlobalFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {}
type Methods = {}
type Computed = {}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'DefalutLayout',
})
</script>
