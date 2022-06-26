<template>
  <BaseBox :component="rootComponent" class="w-full">
    <BaseButton component="NuxtLink" to="/">
      {{ $accessor.resources.shortTextMap.get('global-header-ja') }} |
      {{ $accessor.resources.shortTextMap.get('global-header-en') }}
    </BaseButton>
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
  name: 'GlobalHeader',

  inheritAttrs: false,

  computed: {
    rootComponent() {
      return this.$startingFromIndexPage ? 'h1' : 'header'
    },
  },
})
</script>
