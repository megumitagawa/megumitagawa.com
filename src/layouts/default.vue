<template>
  <BaseBox component="div" class="relative w-full h-full py-10">
    <BaseBox component="div" class="absolute top-0 left-1/2 -translate-x-1/2">
      <SiteTitle />
    </BaseBox>
    <BaseBox component="div" class="w-full h-full overflow-auto">
      <Nuxt />
    </BaseBox>
    <BaseBox
      component="div"
      class="absolute bottom-0 left-1/2 -translate-x-1/2"
    >
      <SiteNavigation />
    </BaseBox>
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
