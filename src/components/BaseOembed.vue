<template>
  <!-- Dynamic component can't be used because v-html will break -->
  <!-- The html value is always provided by reliable providers -->
  <!-- eslint-disable-next-line vue/no-v-html -->
  <span :class="['block overflow-hidden w-full', { rounded }]" v-html="html" />
</template>

<script lang="ts" setup>
import { extract } from '@extractus/oembed-extractor'
import { isVideoTypeData } from '../models/OembedData'

type Props = {
  slug: string
  url: string
  rounded?: boolean
}

const { slug, url, rounded = true } = defineProps<Props>()

const { data: oembedDataRef } = await useAsyncData(`oembed/${slug}`, () =>
  extract(url)
)
if (!oembedDataRef.value) throw createError('No oembed-extractor response')
const html = isVideoTypeData(oembedDataRef.value)
  ? oembedDataRef.value.html
  : ''
</script>

<style lang="postcss" scoped>
:deep(iframe) {
  @apply w-full h-full aspect-video;
}
</style>
