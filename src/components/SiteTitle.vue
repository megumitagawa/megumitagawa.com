<template>
  <BaseBox component="NuxtLink" to="/">
    <BaseStack
      :component="rootComponent"
      direction="row"
      justify-content="center"
      align-items="center"
    >
      {{ $accessor.resources.shortTextMap.get('global-header-ja') }}
      <SingleDotIcon />
      {{ $accessor.resources.shortTextMap.get('global-header-en') }}
    </BaseStack>
  </BaseBox>
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {}
type Methods = {}
type Computed = {
  rootComponent: string
}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'SiteTitle',

  inheritAttrs: false,

  computed: {
    rootComponent() {
      return this.$startingFromIndexPage ? 'h1' : 'header'
    },
  },
})
</script>
