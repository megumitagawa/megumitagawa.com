<template>
  <BaseBox component="div" class="w-full h-full">
    <BaseBox
      component="div"
      class="grid grid-rows-default-layout grid-cols-default-layout w-full h-full"
    >
      <GlobalHeader />
      <BaseBox component="main" class="relative overflow-auto">
        <Nuxt />
      </BaseBox>
      <GlobalFooter />
    </BaseBox>
    <GlobalBackdrop />
  </BaseBox>
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
