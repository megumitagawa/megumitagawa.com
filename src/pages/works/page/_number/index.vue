<template>
  <BaseStack component="div">
    <PrimaryHeading component="h1">
      {{ shortTextMap.get('works-page-heading') }}
    </PrimaryHeading>
    <PrimaryBody v-for="work of workList" :key="work.id" component="article">
      <BaseStack component="div">
        <BaseImage
          v-for="featuredMedia of work.featuredMediaList"
          :key="featuredMedia.sys.id"
          :src="`https:${featuredMedia.fields.file.url}`"
          :width="featuredMedia.fields.file.details.image.width"
          :height="featuredMedia.fields.file.details.image.height"
          :alt="featuredMedia.fields.description || ''"
        />
        <SecondaryHeading component="h2">
          {{ work.title }}
        </SecondaryHeading>
        <SecondaryBody :content="work.htmlStringContent" component="div" />
      </BaseStack>
    </PrimaryBody>
    <PrimaryBody v-if="!workList.length" component="p">
      {{ shortTextMap.get('works-page-no-entry-message') }}
    </PrimaryBody>
    <BasePager
      :current-page-number="currentPageNumber"
      :total-page-number="totalPageNumber"
      component="div"
    >
      <template #previous="{ previousPageNumber }">
        <BaseButton
          component="NuxtLink"
          :to="`/works/page/${previousPageNumber || ''}`"
          :disabled="!previousPageNumber"
        >
          <template #startIcon>
            <LeftChevonIcon />
          </template>
          {{ shortTextMap.get('works-page-pager-previous-link') }}
        </BaseButton>
      </template>
      <template #current="{ currentPageNumber, totalPageNumber }">
        <BaseSelect
          :value="`${currentPageNumber}`"
          name="pager"
          @input="goToWorksPage"
        >
          <BaseBox
            v-for="pageNumber in totalPageNumber"
            :key="pageNumber"
            :value="`${pageNumber}`"
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
        >
          {{ shortTextMap.get('works-page-pager-next-link') }}
          <template #endIcon>
            <RightChevonIcon />
          </template>
        </BaseButton>
      </template>
    </BasePager>
  </BaseStack>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  createErrorCatchableAsyncData,
  createStoreReadyAsyncData,
} from '@/models/AsyncData'
import { FormEvent } from '@/models/FormEvent'
import { Page } from '@/models/Page'
import { createPage } from '@/models/PageEntry'
import { PageFields } from '@/models/PageFields'
import { PageNumber } from '@/models/PageNumber'
import { Work } from '@/models/Work'
import { createTotalPageNumber } from '@/models/WorkEntries'
import { createWork } from '@/models/WorkEntry'
import { WorkFields } from '@/models/WorkFields'

type Data = Page & {
  workList: Work[]
  currentPageNumber: PageNumber
  totalPageNumber: PageNumber
}
type Methods = {
  goToWorksPage(formEvent: FormEvent<HTMLSelectElement>): void
}
type Computed = {}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'WorksPageIndexPage',

  asyncData: createErrorCatchableAsyncData(
    createStoreReadyAsyncData(
      async ({ params, route, $config, $contentfulClientApi }) => {
        const { items: pageEntryList } =
          await $contentfulClientApi.withoutUnresolvableLinks.getEntries<PageFields>(
            { content_type: 'page', 'fields.path': '/works' }
          )
        if (pageEntryList.length < 1) throw new Error('No page entry')

        const currentPageNumber = +params.number
        if (!(currentPageNumber > 0)) throw new Error('Not found')
        const limit = $config.worksPageWorkListLength
        const workEntries =
          await $contentfulClientApi.withoutUnresolvableLinks.getEntries<WorkFields>(
            {
              content_type: 'work',
              limit,
              skip: limit * (currentPageNumber - 1),
            }
          )
        const { items: workEntryList } = workEntries
        if (workEntryList.length < 1) throw new Error('Not found')
        const totalPageNumber = createTotalPageNumber(workEntries)

        const ogUrl = `${$config.siteUrl}${route.path}`
        const page = createPage(pageEntryList[0], ogUrl)
        const workList = workEntryList.map(createWork)

        return {
          ...page,
          workList,
          currentPageNumber,
          totalPageNumber,
        }
      }
    )
  ),

  head() {
    return {
      title: this.title,
      meta: this.meta,
    }
  },

  methods: {
    goToWorksPage(formEvent) {
      this.$router.push(`/works/page/${formEvent.target.value}`)
    },
  },
})
</script>
