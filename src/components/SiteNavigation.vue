<template>
  <BaseStack
    component="nav"
    direction="row"
    justify-content="center"
    align-items="center"
    spacing="md"
    :class="[
      'text-base',
      {
        'w-full': fullWidth,
        'h-full': fullHeight,
      },
    ]"
  >
    <BaseButton component="NuxtLink" to="/#works" full-width>
      {{ $accessor.resources.shortTextMap.get('site-navigation-works-link') }}
    </BaseButton>
    <BaseButton component="NuxtLink" to="/#profile" full-width>
      {{ $accessor.resources.shortTextMap.get('site-navigation-profile-link') }}
    </BaseButton>
    <BaseButton component="NuxtLink" to="/#contact" full-width>
      {{ $accessor.resources.shortTextMap.get('site-navigation-contact-link') }}
    </BaseButton>
    <BaseIconButton
      component="a"
      href="https://soundcloud.com/megumi-tagawa"
      target="_blank"
      rel="noopener noreferrer"
      size="2.5xl"
      color="info"
    >
      <SoundListIcon size="2.5xl" />
    </BaseIconButton>
  </BaseStack>
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {}
type Methods = {}
type Computed = {}
type Props = {
  fullWidth: boolean
  fullHeight: boolean
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'SiteNavigation',

  inheritAttrs: false,

  props: {
    fullWidth: { type: Boolean, default: true },
    fullHeight: { type: Boolean, default: false },
  },
})
</script>
