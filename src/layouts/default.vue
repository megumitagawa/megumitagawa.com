<template>
  <div class="grid grid-rows-layout grid-cols-layout w-full h-full">
    <GlobalHeader />
    <main class="block overflow-auto">
      <Nuxt />
    </main>
    <GlobalFooter />
    <GlobalBackdrop />
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
