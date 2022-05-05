<template>
  <div class="default-layout">
    <GlobalHeader />
    <main class="main">
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

<style lang="postcss" scoped>
.default-layout {
  display: grid;
  grid-template-rows: 4.4rem 1fr 4.4rem 0;
  grid-template-columns: 100%;
  width: 100%;
  height: 100%;
}

.main {
  display: block;
  overflow: auto;
}
</style>
