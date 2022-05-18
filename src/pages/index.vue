<template>
  <div>
    <div id="works">
      <div>
        {{ shortTextMap.get('index-page-works-section-heading') }}
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
      <div v-if="workList.length">
        <NuxtLink to="/works">
          {{ shortTextMap.get('index-page-works-section-link') }}
        </NuxtLink>
      </div>
      <div v-if="!workList.length">
        {{ shortTextMap.get('index-page-no-entry-message') }}
      </div>
    </div>

    <div id="profile">
      <div>
        {{ shortTextMap.get('index-page-profile-section-heading') }}
      </div>
      <div>
        <NuxtPicture
          :src="`https:${
            mediaMap.get('index-page-profile-section').fields.file.url
          }`"
          :width="
            mediaMap.get('index-page-profile-section').fields.file.details.image
              .width
          "
          :height="
            mediaMap.get('index-page-profile-section').fields.file.details.image
              .height
          "
          :alt="
            mediaMap.get('index-page-profile-section').fields.description || ''
          "
        />
      </div>
      <div>
        {{ shortTextMap.get('index-page-profile-section-name-ja') }}
      </div>
      <!-- eslint-disable vue/no-v-html -->
      <div
        v-html="htmlStringRichTextMap.get('index-page-profile-section-ja')"
      />
      <!-- eslint-enable vue/no-v-html -->
      <div>
        {{ shortTextMap.get('index-page-profile-section-name-en') }}
      </div>
      <!-- eslint-disable vue/no-v-html -->
      <div
        v-html="htmlStringRichTextMap.get('index-page-profile-section-en')"
      />
      <!-- eslint-enable vue/no-v-html -->
    </div>

    <div id="contact">
      <div>
        {{ shortTextMap.get('index-page-contact-section-heading') }}
      </div>
      <form
        :name="$config.netlifyFormName"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit"
      >
        <input
          type="hidden"
          name="form-name"
          :value="$config.netlifyFormName"
        />
        <input name="bot-field" />
        <input
          type="text"
          name="name"
          required
          :placeholder="
            shortTextMap.get(
              'index-page-contact-section-name-input-placeholder'
            )
          "
        />
        <input
          type="email"
          name="email"
          required
          :placeholder="
            shortTextMap.get(
              'index-page-contact-section-email-input-placeholder'
            )
          "
        />
        <textarea
          name="message"
          required
          :placeholder="
            shortTextMap.get(
              'index-page-contact-section-message-textarea-placeholder'
            )
          "
        />
        <button type="submit">
          {{ shortTextMap.get('index-page-contact-section-button') }}
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  createErrorCatchableAsyncData,
  createStoreReadyAsyncData,
} from '@/models/AsyncData'
import { FormEvent, submitPostRequest } from '@/models/FormEvent'
import { wait } from '@/models/Milliseconds'
import { Page } from '@/models/Page'
import { createPage } from '@/models/PageEntry'
import { PageFields } from '@/models/PageFields'
import { Work } from '@/models/Work'
import { createWork } from '@/models/WorkEntry'
import { WorkFields } from '@/models/WorkFields'

type Data = Page & {
  workList: Work[]
}
type Methods = {
  handleSubmit: (formEvent: FormEvent<HTMLFormElement>) => Promise<void>
}
type Computed = {}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'IndexPage',

  asyncData: createErrorCatchableAsyncData(
    createStoreReadyAsyncData(async ({ app, route, $config }) => {
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
      const page = createPage(pageEntry, ogUrl)
      const workList = workEntryList.map(createWork)

      return {
        ...page,
        workList,
      }
    })
  ),

  head() {
    return {
      title: this.title,
      meta: this.meta,
    }
  },

  methods: {
    async handleSubmit(formEvent) {
      this.$accessor.backdrop.set({ open: true, status: 'sending' })
      const { ok } = await submitPostRequest(formEvent)
      this.$accessor.backdrop.set({ status: ok ? 'succeeded' : 'failed' })
      await wait(this.$config.globalBackdropDelay)
      this.$accessor.backdrop.set({ open: false })
    },
  },
})
</script>
