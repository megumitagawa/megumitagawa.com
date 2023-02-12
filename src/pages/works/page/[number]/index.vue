<template>
  <Title>{{ title }}</Title>
  <Meta
    v-for="metaItem of meta"
    :key="metaItem.hid"
    :name="metaItem.name"
    :content="metaItem.content"
  />

  <BaseStack component="div" spacing="md">
    <PrimaryHeading component="h1">
      {{ shortTextMap.get('works-page-heading') }}
    </PrimaryHeading>
    <PrimaryBody v-for="work of workList" :key="work.id" component="article">
      <BaseStack component="div" spacing="md">
        <BaseImage
          v-for="featuredMedia of work.featuredMediaList"
          :key="featuredMedia.sys.id"
          :src="`https:${featuredMedia.fields.file?.url ?? ''}`"
          :width="primaryContentWidth"
          :height="
            primaryContentWidth *
            ((featuredMedia.fields.file?.details.image?.height ?? 0) /
              (featuredMedia.fields.file?.details.image?.width ?? 0))
          "
          :alt="featuredMedia.fields.description || ''"
          loading="lazy"
        />
        <SecondaryHeading component="h2">
          {{ work.title }}
        </SecondaryHeading>
        <SecondaryBody component="div">
          <RichTextRenderer :document="work.content" />
        </SecondaryBody>
      </BaseStack>
    </PrimaryBody>
    <PrimaryBody v-if="!workList.length" component="p">
      {{ shortTextMap.get('works-page-no-entry-message') }}
    </PrimaryBody>
    <BasePager
      component="BaseStack"
      direction="row"
      spacing="md"
      :current-page-number="currentPageNumber"
      :total-page-number="totalPageNumber"
    >
      <template #previous="{ previousPageNumber }">
        <BaseButton
          component="NuxtLink"
          :to="`/works/page/${previousPageNumber || ''}`"
          :disabled="!previousPageNumber"
          size="xs"
        >
          <template #startIcon>
            <LeftChevonIcon color="inherit" />
          </template>
          <BaseBox class="translate-x-2.5">
            {{ shortTextMap.get('works-page-pager-previous-link') }}
          </BaseBox>
        </BaseButton>
      </template>
      <template #current>
        <BaseSelect name="pager" @input="goToWorksPage">
          <BaseBox
            v-for="pageNumber in totalPageNumber"
            :key="pageNumber"
            :value="pageNumber"
            :selected="currentPageNumber === pageNumber"
            component="option"
          >
            {{ pageNumber }} / {{ totalPageNumber }}
          </BaseBox>
        </BaseSelect>
      </template>
      <template #next="{ nextPageNumber }">
        <BaseButton
          component="NuxtLink"
          :to="`/works/page/${nextPageNumber || ''}`"
          :disabled="!nextPageNumber"
          size="xs"
        >
          <BaseBox class="-translate-x-2.5">
            {{ shortTextMap.get('works-page-pager-next-link') }}
          </BaseBox>
          <template #endIcon>
            <RightChevonIcon color="inherit" />
          </template>
        </BaseButton>
      </template>
    </BasePager>
  </BaseStack>
</template>

<script lang="ts" setup>
// contentful-rich-text-vue-renderer has no type declaration
// @ts-ignore
import RichTextRenderer from 'contentful-rich-text-vue-renderer'
import { isHTMLSelectElement } from '@/models/HTMLSelectElement'
import { createPage } from '@/models/PageEntry'
import { PageFields } from '@/models/PageFields'
import { createTotalPageNumber } from '@/models/WorkEntries'
import { createWork } from '@/models/WorkEntry'
import { WorkFields } from '@/models/WorkFields'

const {
  $contentfulClientApi,
  $computedTailwindTheme: { primaryContentWidth },
} = useNuxtApp()
const { path, params } = useRoute()
const {
  public: { siteUrl, worksPageWorkListLength },
} = useRuntimeConfig()
const router = useRouter()

const { data: pageEntriesRef } = await useAsyncData('page/works', () =>
  $contentfulClientApi.withoutUnresolvableLinks.getEntries<PageFields>({
    content_type: 'page',
    'fields.path': '/works',
    include: 2,
  })
)
if (!pageEntriesRef.value) throw createError('No works page response')
const { items: pageEntryList } = pageEntriesRef.value
if (pageEntryList.length < 1) throw createError('No works page entry')
const ogUrl = `${siteUrl}${path}`
const { meta, shortTextMap, title } = createPage(pageEntryList[0], ogUrl)

const currentPageNumber = +params.number
if (!(currentPageNumber > 0)) throw createError('Not found')
const skip = worksPageWorkListLength * (currentPageNumber - 1)
const { data: workEntriesRef } = await useAsyncData(
  `work/${worksPageWorkListLength}/${skip}`,
  () =>
    $contentfulClientApi.withoutUnresolvableLinks.getEntries<WorkFields>({
      content_type: 'work',
      limit: worksPageWorkListLength,
      order: '-fields.date',
      skip,
    })
)
if (!workEntriesRef.value) throw createError('No work response')
const { items: workEntryList } = workEntriesRef.value
const totalPageNumber = createTotalPageNumber(workEntriesRef.value)
const workList = workEntryList.map(createWork)

const goToWorksPage = ({ target }: Event): void => {
  if (!isHTMLSelectElement(target)) return
  router.push(`/works/page/${target.value}`)
}
</script>
