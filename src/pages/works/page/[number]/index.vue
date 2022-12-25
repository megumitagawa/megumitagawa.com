<template>
  <Title>{{ title }}</Title>
  <Meta
    v-for="metaItem of meta"
    :key="metaItem.hid"
    :name="metaItem.name"
    :content="metaItem.content"
  />

  <div>
    {{ shortTextMap.get('works-page-heading') ?? '' }}
  </div>
  <div v-for="work of workList" :key="work.id">
    <img
      v-for="featuredMedia of work.featuredMediaList"
      :key="featuredMedia.sys.id"
      :src="`https:${featuredMedia.fields.file?.url ?? ''}`"
      :width="primaryContentWidth"
      :height="
        primaryContentWidth *
        ((featuredMedia.fields.file?.details?.image?.height ?? 0) /
          (featuredMedia.fields.file?.details?.image?.width ?? 0))
      "
      :alt="featuredMedia.fields.description ?? ''"
      loading="lazy"
    />
    <div>
      {{ work.title }}
    </div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="documentToHtmlString(work.content)" />
  </div>
  <div v-if="!workList.length">
    {{ shortTextMap.get('works-page-no-entry-message') ?? '' }}
  </div>
  <select :value="`${currentPageNumber}`" name="pager" @input="goToWorksPage">
    <option
      v-for="pageNumber in totalPageNumber"
      :key="pageNumber"
      :value="`${pageNumber}`"
    >
      {{ pageNumber }} / {{ totalPageNumber }}
    </option>
  </select>
</template>

<script lang="ts" setup>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
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
