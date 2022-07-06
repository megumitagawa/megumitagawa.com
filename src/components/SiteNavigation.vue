<template>
  <BaseStack component="footer" direction="row">
    <BaseButton component="NuxtLink" to="/#works">
      {{ $accessor.resources.shortTextMap.get('global-footer-works-link') }}
    </BaseButton>
    <BaseButton component="NuxtLink" to="/#profile">
      {{ $accessor.resources.shortTextMap.get('global-footer-profile-link') }}
    </BaseButton>
    <BaseButton component="NuxtLink" to="/#contact">
      {{ $accessor.resources.shortTextMap.get('global-footer-contact-link') }}
    </BaseButton>
    <BaseIconButton
      component="a"
      href="https://soundcloud.com/megumi-tagawa"
      target="_blank"
      rel="noopener noreferrer"
    >
      <SoundListIcon />
    </BaseIconButton>
  </BaseStack>
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {}
type Methods = {}
type Computed = {}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'SiteNavigation',

  inheritAttrs: false,
})
</script>
