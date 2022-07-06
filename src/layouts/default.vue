<template>
  <BaseBox
    component="div"
    class="grid grid-rows-default-layout grid-cols-default-layout w-full h-full"
  >
    <SiteTitle />
    <BaseBox component="main" class="relative overflow-auto">
      <Nuxt />
    </BaseBox>
    <SiteNavigation />
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
