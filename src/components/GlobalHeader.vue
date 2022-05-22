<template>
  <div class="overflow-hidden">
    <NuxtLink to="/">
      {{ $accessor.resources.shortTextMap.get('global-header-ja') }} |
      {{ $accessor.resources.shortTextMap.get('global-header-en') }}
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {}
type Methods = {}
type Computed = {}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'GlobalHeader',
})
</script>
