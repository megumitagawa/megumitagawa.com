<template>
  <BaseBox
    component="NuxtLink"
    to="/"
    :class="[
      'flex justify-center items-center rounded bg-white/75 backdrop-blur text-base',
      {
        'w-full': fullWidth,
        'h-full': fullHeight,
      },
    ]"
  >
    <BaseStack
      :component="component"
      direction="row"
      justify-content="center"
      align-items="center"
      spacing="sm"
    >
      <BaseBox>
        {{ $accessor.resources.shortTextMap.get('site-title-ja') }}
      </BaseBox>
      <SingleDotIcon size="xs" />
      <BaseBox>
        {{ $accessor.resources.shortTextMap.get('site-title-en') }}
      </BaseBox>
    </BaseStack>
  </BaseBox>
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {}
type Methods = {}
type Computed = {
  component: string
}
type Props = {
  fullWidth: boolean
  fullHeight: boolean
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'SiteTitle',

  inheritAttrs: false,

  props: {
    fullWidth: { type: Boolean, default: true },
    fullHeight: { type: Boolean, default: false },
  },

  computed: {
    component() {
      return this.$startingFromIndexPage ? 'h1' : 'header'
    },
  },
})
</script>
