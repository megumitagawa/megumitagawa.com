<template>
  <div>
    <div>
      {{ shortTextMap.get('works-page-heading') }}
    </div>
    <div v-for="work of workList" :key="work.id">
      <div
        v-for="featuredMedia of work.featuredMediaList"
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
        {{ work.title }}
      </div>
      <!-- eslint-disable vue/no-v-html -->
      <div v-html="work.htmlStringContent" />
      <!-- eslint-enable vue/no-v-html -->
    </div>
    <div v-if="!workList.length">
      {{ shortTextMap.get('works-page-no-entry-message') }}
    </div>
    <div v-if="pager.previousIndex">
      <NuxtLink :to="`/works/page/${pager.previousIndex}`">
        {{ shortTextMap.get('works-page-pager-previous-link') }}
      </NuxtLink>
    </div>
    <div>{{ pager.currentIndex }} / {{ pager.totalIndex }}</div>
    <div v-if="pager.nextIndex">
      <NuxtLink :to="`/works/page/${pager.nextIndex}`">
        {{ shortTextMap.get('works-page-pager-next-link') }}
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  createErrorCatchableAsyncData,
  createStoreReadyAsyncData,
} from '@/models/AsyncData'
import { Page } from '@/models/Page'
import { createPage } from '@/models/PageEntry'
import { PageFields } from '@/models/PageFields'
import { Pager } from '@/models/Pager'
import { Work } from '@/models/Work'
import { createPager } from '@/models/WorkEntries'
import { createWork } from '@/models/WorkEntry'
import { WorkFields } from '@/models/WorkFields'

type Data = Page & {
  workList: Work[]
  pager: Pager
}
type Methods = {}
type Computed = {}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'WorksPageIndexPage',

  asyncData: createErrorCatchableAsyncData(
    createStoreReadyAsyncData(async ({ app, params, route, $config }) => {
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
      const page = createPage(pageEntry, ogUrl)
      const workList = workEntryList.map(createWork)
      const pager = createPager(workEntries, indexNumber)

      return {
        ...page,
        workList,
        pager,
      }
    })
  ),

  head() {
    return {
      title: this.title,
      meta: this.meta,
    }
  },
})
</script>
