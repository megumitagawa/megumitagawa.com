<template>
  <BaseBox component="footer" class="w-full">
    <BaseStack
      component="nav"
      :direction="{ xs: 'row', lg: 'column' }"
      :align-items="{ xs: 'center', lg: 'flex-end' }"
      :spacing="{ xs: 'md', lg: 'sm', '3xl': 'md', '4xl': 'lg' }"
    >
      <BaseStack
        component="div"
        :direction="{ xs: 'row', lg: 'column' }"
        :align-items="{ xs: 'center', lg: 'flex-end' }"
        :spacing="{ xs: 'md', lg: '3xs', '3xl': '2xs', '4xl': 'xs' }"
      >
        <BaseButton
          component="NuxtLink"
          to="/#works"
          :full-width="{ xs: true, lg: false }"
          :text="{ xs: false, lg: true }"
          :size="{ xs: 'base', '3xl': 'xl', '4xl': '2xl' }"
          :color="{ xs: 'base', lg: 'pale' }"
          opaque
        >
          {{ shortTextMap.get('site-navigation-works-link') }}
        </BaseButton>
        <BaseButton
          component="NuxtLink"
          to="/#profile"
          :full-width="{ xs: true, lg: false }"
          :text="{ xs: false, lg: true }"
          :size="{ xs: 'base', '3xl': 'xl', '4xl': '2xl' }"
          :color="{ xs: 'base', lg: 'pale' }"
          opaque
        >
          {{ shortTextMap.get('site-navigation-profile-link') }}
        </BaseButton>
        <BaseButton
          component="NuxtLink"
          to="/#contact"
          :full-width="{ xs: true, lg: false }"
          :text="{ xs: false, lg: true }"
          :size="{ xs: 'base', '3xl': 'xl', '4xl': '2xl' }"
          :color="{ xs: 'base', lg: 'pale' }"
          opaque
        >
          {{ shortTextMap.get('site-navigation-contact-link') }}
        </BaseButton>
      </BaseStack>
      <BaseIconButton
        component="a"
        href="https://soundcloud.com/megumi-tagawa"
        target="_blank"
        rel="noopener noreferrer"
        :size="{ xs: '2.5xl', '4xl': '3.5xl' }"
        color="info"
        :blurred="false"
      >
        <SoundListIcon
          :size="{ xs: '2.5xl', '4xl': '3.5xl' }"
          color="inherit"
        />
      </BaseIconButton>
    </BaseStack>
  </BaseBox>
</template>

<script setup lang="ts">
import { useResourcesStore } from '../stores/resources'

const { shortTextMap } = useResourcesStore()
</script>
