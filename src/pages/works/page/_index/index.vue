<template>
  <div>
    <div>
      {{ pageData.shortTextMap.get('works-page-heading') }}
    </div>
    <div v-for="workData of workDataList" :key="workData.id">
      <div
        v-for="featuredMedia of workData.featuredMediaList"
        :key="featuredMedia.sys.id"
      >
        <NuxtPicture
          :src="`https:${featuredMedia.fields.file.url}`"
          :width="featuredMedia.fields.file.details.image.width"
          :height="featuredMedia.fields.file.details.image.height"
          :alt="featuredMedia.fields.description || ''"
        />
      </div>
      <div>
        {{ workData.title }}
      </div>
      <!-- eslint-disable vue/no-v-html -->
      <div v-html="workData.htmlStringContent" />
      <!-- eslint-enable vue/no-v-html -->
    </div>
    <div v-if="!workDataList.length">
      {{ pageData.shortTextMap.get('works-page-no-entry-message') }}
    </div>
    <div v-if="pagerData.previousIndex">
      <NuxtLink :to="`/works/page/${pagerData.previousIndex}`">
        {{ pageData.shortTextMap.get('works-page-pager-previous-link') }}
      </NuxtLink>
    </div>
    <div>{{ pagerData.currentIndex }} / {{ pagerData.totalIndex }}</div>
    <div v-if="pagerData.nextIndex">
      <NuxtLink :to="`/works/page/${pagerData.nextIndex}`">
        {{ pageData.shortTextMap.get('works-page-pager-next-link') }}
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { makeErrorCatchable, makeStoreReady } from '@/lib/AsyncData'
import { PageData } from '@/lib/PageData'
import { createPageData, createPageHead } from '@/lib/PageEntry'
import { PageFields } from '@/lib/PageFields'
import { PageHead } from '@/lib/PageHead'
import { PagerData } from '@/lib/PagerData'
import { WorkData } from '@/lib/WorkData'
import { createPagerData } from '@/lib/WorkEntries'
import { createWorkData } from '@/lib/WorkEntry'
import { WorkFields } from '@/lib/WorkFields'

type Data = {
  pageHead: PageHead
  pageData: PageData
  workDataList: WorkData[]
  pagerData: PagerData
}
type Methods = {}
type Computed = {}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'WorksPageIndexPage',

  asyncData: makeErrorCatchable(
    makeStoreReady(async ({ app, params, route, $config }) => {
      const { items: pageEntryList } =
        await app.$contentfulClientApi.withoutUnresolvableLinks.getEntries<PageFields>(
          { content_type: 'page', 'fields.path': '/works' }
        )
      if (pageEntryList.length < 1) throw new Error('No page entry')

      const indexNumber = +params.index
      if (!(indexNumber > 0)) throw new Error('Not found')
      const limit = $config.worksPageWorkListLength
      const workEntries =
        await app.$contentfulClientApi.withoutUnresolvableLinks.getEntries<WorkFields>(
          { content_type: 'work', limit, skip: limit * (indexNumber - 1) }
        )
      const { items: workEntryList } = workEntries
      if (workEntryList.length < 1) throw new Error('Not found')

      const pageEntry = pageEntryList[0]
      const ogUrl = `${$config.siteUrl}${route.path}`
      const pageHead = createPageHead(pageEntry, ogUrl)
      const pageData = createPageData(pageEntry)
      const workDataList = workEntryList.map(createWorkData)
      const pagerData = createPagerData(workEntries, indexNumber)

      return {
        pageHead,
        pageData,
        workDataList,
        pagerData,
      }
    })
  ),

  head() {
    return this.pageHead
  },
})
</script>
