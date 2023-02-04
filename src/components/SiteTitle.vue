<template>
  <BaseButton
    component="NuxtLink"
    to="/"
    :full-width="{ xs: true, lg: false }"
    :text="{ xs: false, lg: true }"
    :size="{ xs: 'base', lg: 'xl', '3xl': '2xl', '4xl': '2.5xl' }"
    :color="{ xs: 'base', lg: 'pale' }"
    opaque
  >
    <BaseStack
      :component="component"
      :direction="{ xs: 'row', lg: 'column' }"
      justify-content="center"
      :align-items="{ xs: 'center', lg: 'flex-end' }"
      :spacing="{ xs: 'sm', lg: '6xs', '3xl': '5xs', '4xl': '4xs' }"
    >
      <BaseBox>
        {{ shortTextMap.get('site-title-ja') }}
      </BaseBox>
      <BaseBox class="lg:hidden">
        <SingleDotIcon size="xs" />
      </BaseBox>
      <BaseBox>
        {{ shortTextMap.get('site-title-en') }}
      </BaseBox>
    </BaseStack>
  </BaseButton>
</template>

<script setup lang="ts">
import { useResourcesStore } from '../stores/resources'

const { shortTextMap } = useResourcesStore()

const { path } = useRoute()
const component = computed(() => (path === '/' ? 'h1' : 'header'))
</script>
