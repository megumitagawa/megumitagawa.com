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
      <NuxtLoadingIndicator
        :color="tailwindTheme.extend.colors.lime"
        :height="4"
      />
      <BaseBox
        :class="[
          'fixed top-0 left-0 w-full h-screen',
          // To hide image resizing in iOS >= 15.4
          'h-large-screen',
        ]"
      >
        <BaseImage
          :src="{
            xs: '/img/background-xs.jpg',
            lg: '/img/background-lg.jpg',
          }"
          :width="{ xs: 856, lg: 3840 }"
          :height="{ xs: 1618, lg: 2160 }"
          alt=""
          object-fit="cover"
          :rounded="false"
        />
      </BaseBox>
      <BaseBox
        :class="[
          'fixed right-1/2 translate-x-1/2',
          // To avoid SiteNavigation overlapping with full body image in iOS >= 15.4
          'top-[calc(theme(spacing.21)+(theme(height.screen)_-_theme(spacing.21)*2)*((1_-_0.9)/2))]',
          'top-[calc(theme(spacing.21)+(theme(height.dynamic-screen)_-_theme(spacing.21)*2)*((1_-_0.9)/2))]',
          'w-[calc((theme(height.screen)_-_theme(spacing.21)*2)*0.9*(550/1635))]',
          'w-[calc((theme(height.dynamic-screen)_-_theme(spacing.21)*2)*0.9*(550/1635))]',
          'drop-shadow-2xl transition-top-width-opacity duration-1000',
          'lg:top-[calc((theme(height.screen)-theme(width.46)*(1635/550))/2)]',
          'lg:top-[calc((theme(height.dynamic-screen)-theme(width.46)*(1635/550))/2)]',
          'lg:right-[calc((theme(inset.full)_-_theme(screens.xs))/2/2)]',
          'lg:w-46',
          '3xl:top-[calc((theme(height.screen)-theme(width.57)*(1635/550))/2)]',
          '3xl:top-[calc((theme(height.dynamic-screen)-theme(width.57)*(1635/550))/2)]',
          '3xl:w-57',
          '4xl:top-[calc((theme(height.screen)-theme(width.68)*(1635/550))/2)]',
          '4xl:top-[calc((theme(height.dynamic-screen)-theme(width.68)*(1635/550))/2)]',
          '4xl:w-68',
          {
            'opacity-0': !fullBodyImageActive,
            'opacity-100': fullBodyImageActive,
          },
        ]"
      >
        <BaseImage
          src="/img/full-body.png"
          :width="550"
          :height="1635"
          alt=""
          :rounded="false"
        />
      </BaseBox>
      <BaseBox
        component="div"
        :class="[
          'fixed top-10.5 right-1/2 z-10 translate-x-1/2 -translate-y-1/2',
          'w-screens.xs px-5',
          'lg:top-auto lg:bottom-1/2',
          'lg:right-[calc(theme(screens.xs)+(theme(inset.full)_-_theme(screens.xs))*(5/8))]',
          'lg:translate-x-3.5 lg:-translate-y-28 lg:w-auto lg:px-0',
          'xl:right-[calc(theme(screens.xs)+(theme(inset.full)_-_theme(screens.xs))*(4/6))]',
          'xl:translate-x-5',
        ]"
      >
        <SiteTitle />
      </BaseBox>
      <BaseBox
        component="div"
        :class="['w-screens.xs mx-auto px-5 py-21', 'lg:py-5']"
      >
        <NuxtPage />
      </BaseBox>
      <BaseBox
        component="div"
        :class="[
          'fixed bottom-10.5 right-1/2 z-10 translate-x-1/2 translate-y-1/2',
          'w-screens.xs px-5',
          'lg:top-1/2 lg:bottom-auto',
          'lg:right-[calc(theme(screens.xs)+(theme(inset.full)_-_theme(screens.xs))*(5/8))]',
          'lg:translate-x-3.5 lg:translate-y-0 lg:w-auto lg:px-0',
          'xl:right-[calc(theme(screens.xs)+(theme(inset.full)_-_theme(screens.xs))*(4/6))]',
          'xl:translate-x-5',
        ]"
      >
        <SiteNavigation />
      </BaseBox>
    </Body>
  </Html>
</template>

<script setup lang="ts">
import { setContent, updateReference } from 'viewport-extra'
import { wait } from '@/models/Milliseconds'
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
  public: { indexFullBodyImageDelay, metaRobotsNone, tailwindTheme },
} = useRuntimeConfig()
const fullBodyImageActive = ref(false)
onMounted(async () => {
  updateReference()
  setContent({ minWidth: parseInt(tailwindTheme.screens.xs, 10) })
  // To hide image resizing when updating viewport
  await wait(indexFullBodyImageDelay)
  fullBodyImageActive.value = true
})
</script>
