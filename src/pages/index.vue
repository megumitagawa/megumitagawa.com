<template>
  <div>
    <div id="works">
      <div>
        {{ pageData.shortTextMap.get('index-page-works-section-heading') }}
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
      <div v-if="workDataList.length">
        <NuxtLink to="/works">
          {{ pageData.shortTextMap.get('index-page-works-section-link') }}
        </NuxtLink>
      </div>
      <div v-if="!workDataList.length">
        {{ pageData.shortTextMap.get('index-page-no-entry-message') }}
      </div>
    </div>

    <div id="profile">
      <div>
        {{ pageData.shortTextMap.get('index-page-profile-section-heading') }}
      </div>
      <div>
        <NuxtPicture
          :src="`https:${
            pageData.mediaMap.get('index-page-profile-section').fields.file.url
          }`"
          :width="
            pageData.mediaMap.get('index-page-profile-section').fields.file
              .details.image.width
          "
          :height="
            pageData.mediaMap.get('index-page-profile-section').fields.file
              .details.image.height
          "
          :alt="
            pageData.mediaMap.get('index-page-profile-section').fields
              .description || ''
          "
        />
      </div>
      <div>
        {{ pageData.shortTextMap.get('index-page-profile-section-name-ja') }}
      </div>
      <!-- eslint-disable vue/no-v-html -->
      <div
        v-html="
          pageData.htmlStringRichTextMap.get('index-page-profile-section-ja')
        "
      />
      <!-- eslint-enable vue/no-v-html -->
      <div>
        {{ pageData.shortTextMap.get('index-page-profile-section-name-en') }}
      </div>
      <!-- eslint-disable vue/no-v-html -->
      <div
        v-html="
          pageData.htmlStringRichTextMap.get('index-page-profile-section-en')
        "
      />
      <!-- eslint-enable vue/no-v-html -->
    </div>

    <div id="contact">
      <div>
        {{ pageData.shortTextMap.get('index-page-contact-section-heading') }}
      </div>
      <div>
        {{
          pageData.shortTextMap.get(
            'index-page-contact-section-name-input-placeholder'
          )
        }}
      </div>
      <div>
        {{
          pageData.shortTextMap.get(
            'index-page-contact-section-email-input-placeholder'
          )
        }}
      </div>
      <div>
        {{
          pageData.shortTextMap.get(
            'index-page-contact-section-message-textarea-placeholder'
          )
        }}
      </div>
      <div>
        {{ pageData.shortTextMap.get('index-page-contact-section-button') }}
      </div>
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
import { WorkData } from '@/lib/WorkData'
import { createWorkData } from '@/lib/WorkEntry'
import { WorkFields } from '@/lib/WorkFields'

type Data = {
  pageHead: PageHead
  pageData: PageData
  workDataList: WorkData[]
}
type Methods = {}
type Computed = {}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'IndexPage',

  asyncData: makeErrorCatchable(
    makeStoreReady(async ({ app, route, $config }) => {
      const { items: pageEntryList } =
        await app.$contentfulClientApi.withoutUnresolvableLinks.getEntries<PageFields>(
          { content_type: 'page', 'fields.path': '/' }
        )
      if (pageEntryList.length < 1) throw new Error('No page entry')

      const { items: workEntryList } =
        await app.$contentfulClientApi.withoutUnresolvableLinks.getEntries<WorkFields>(
          { content_type: 'work', limit: $config.indexPageWorkListLength }
        )

      const pageEntry = pageEntryList[0]
      const ogUrl = `${$config.siteUrl}${route.path}`
      const pageHead = createPageHead(pageEntry, ogUrl)
      const pageData = createPageData(pageEntry)
      const workDataList = workEntryList.map(createWorkData)

      return {
        pageHead,
        pageData,
        workDataList,
      }
    })
  ),

  head() {
    return this.pageHead
  },
})
</script>
