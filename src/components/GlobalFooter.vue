<template>
  <div class="overflow-hidden">
    <div>
      <NuxtLink to="/#works">
        {{ $accessor.resources.shortTextMap.get('global-footer-works-link') }}
      </NuxtLink>
    </div>
    <div>
      <NuxtLink to="/#profile">
        {{ $accessor.resources.shortTextMap.get('global-footer-profile-link') }}
      </NuxtLink>
    </div>
    <div>
      <NuxtLink to="/#contact">
        {{ $accessor.resources.shortTextMap.get('global-footer-contact-link') }}
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {}
type Methods = {}
type Computed = {}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'GlobalFooter',
})
</script>
