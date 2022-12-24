<template>
  <Html lang="ja">
    <Head>
      <Title>megumitagawa.com</Title>
      <Meta name="viewport" />
      <Meta v-if="metaRobotsNone" name="robots" content="noindex,nofollow" />
      <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <Link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin="anonymous"
      />
      <Link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@500&family=Quicksand:wght@600&display=swap"
        media="print"
        onload="this.media='all'"
      />
      <Link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>
    <Body>
      <NuxtPage />
    </Body>
  </Html>
</template>

<script setup lang="ts">
import { setContent, updateReference } from 'viewport-extra'
import { ResourcesFields } from '@/models/ResourcesFields'
import { createResources } from '@/models/ResourcesEntry'
import { useResourcesStore } from '@/stores/resources'

const { $contentfulClientApi } = useNuxtApp()
const { data: resourcesEntriesRef } = await useAsyncData(
  'resources/global-components',
  () =>
    $contentfulClientApi.withoutUnresolvableLinks.getEntries<ResourcesFields>({
      content_type: 'resources',
      'fields.slug': 'global-components',
    })
)
if (!resourcesEntriesRef.value)
  throw createError('No global components resources response')
const { items: resourcesEntryList } = resourcesEntriesRef.value
if (resourcesEntryList.length < 1)
  throw createError('No global components resources entry')
const resources = createResources(resourcesEntryList[0])
const resourcesStore = useResourcesStore()
resourcesStore.shortTextMap = resources.shortTextMap
resourcesStore.longTextMap = resources.longTextMap
resourcesStore.richTextMap = resources.richTextMap
resourcesStore.mediaMap = resources.mediaMap

const {
  public: { metaRobotsNone, tailwindTheme },
} = useRuntimeConfig()
onMounted(() => {
  updateReference()
  setContent({ minWidth: parseInt(tailwindTheme.screens.xs, 10) })
})
</script>
