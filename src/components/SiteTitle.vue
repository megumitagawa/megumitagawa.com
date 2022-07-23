<template>
  <BaseBox
    component="NuxtLink"
    to="/"
    :class="[
      'flex justify-center items-center w-full p-2.5 rounded text-base',
      'bg-white/75 backdrop-blur shadow-md',
      'lg:block lg:p-0 lg:rounded-none lg:text-xl lg:text-gray',
      'lg:bg-transparent lg:backdrop-blur-none',
      'lg:shadow-none lg:drop-shadow-md',
      '3xl:text-2xl',
      '4xl:text-2.5xl',
    ]"
  >
    <BaseStack
      :component="component"
      :direction="$accessor.currentScreen.overLg ? 'column' : 'row'"
      justify-content="center"
      :align-items="$accessor.currentScreen.overLg ? 'flex-end' : 'center'"
      spacing="sm"
      :em-sizing="$accessor.currentScreen.overLg"
    >
      <BaseBox>
        {{ $accessor.resources.shortTextMap.get('site-title-ja') }}
      </BaseBox>
      <SingleDotIcon v-show="!$accessor.currentScreen.overLg" size="xs" />
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
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'SiteTitle',

  inheritAttrs: false,

  computed: {
    component() {
      return this.$startingFromIndexPage ? 'h1' : 'header'
    },
  },
})
</script>
