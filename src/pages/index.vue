<template>
  <Fragment>
    <BaseStack component="main">
      <BaseBox />
      <BaseStack component="div">
        <BaseStack component="section">
          <PrimaryHeading id="works" component="h2">
            {{ shortTextMap.get('index-page-works-section-heading') }}
          </PrimaryHeading>
          <PrimaryBody
            v-for="work of workList"
            :key="work.id"
            component="article"
          >
            <BaseStack component="div">
              <BaseImage
                v-for="featuredMedia of work.featuredMediaList"
                :key="featuredMedia.sys.id"
                :src="`https:${featuredMedia.fields.file.url}`"
                :width="featuredMedia.fields.file.details.image.width"
                :height="featuredMedia.fields.file.details.image.height"
                :alt="featuredMedia.fields.description || ''"
              />
              <SecondaryHeading component="h3">
                {{ work.title }}
              </SecondaryHeading>
              <SecondaryBody :document="work.content" component="div" />
            </BaseStack>
          </PrimaryBody>
          <BaseButton v-if="workList.length" component="NuxtLink" to="/works">
            {{ shortTextMap.get('index-page-works-section-link') }}
            <template #endIcon>
              <RightChevonIcon />
            </template>
          </BaseButton>
          <PrimaryBody v-else component="p">
            {{ shortTextMap.get('index-page-no-entry-message') }}
          </PrimaryBody>
        </BaseStack>

        <BaseStack component="section">
          <PrimaryHeading id="profile" component="h2">
            {{ shortTextMap.get('index-page-profile-section-heading') }}
          </PrimaryHeading>
          <PrimaryBody component="div">
            <BaseStack component="div">
              <BaseImage
                :src="`https:${
                  mediaMap.get('index-page-profile-section').fields.file.url
                }`"
                :width="
                  mediaMap.get('index-page-profile-section').fields.file.details
                    .image.width
                "
                :height="
                  mediaMap.get('index-page-profile-section').fields.file.details
                    .image.height
                "
                :alt="
                  mediaMap.get('index-page-profile-section').fields
                    .description || ''
                "
              />
              <SecondaryHeading component="h3">
                {{ shortTextMap.get('index-page-profile-section-name-ja') }}
              </SecondaryHeading>
              <SecondaryBody
                :document="richTextMap.get('index-page-profile-section-ja')"
                component="div"
              />
              <SecondaryHeading component="h3">
                {{ shortTextMap.get('index-page-profile-section-name-en') }}
              </SecondaryHeading>
              <SecondaryBody
                :document="richTextMap.get('index-page-profile-section-en')"
                component="div"
              />
            </BaseStack>
          </PrimaryBody>
        </BaseStack>

        <BaseStack component="section">
          <PrimaryHeading id="contact" component="h2">
            {{ shortTextMap.get('index-page-contact-section-heading') }}
          </PrimaryHeading>
          <PrimaryBody component="div">
            <BaseBox
              :name="$config.netlifyFormName"
              component="form"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              @submit.prevent="postAndReport"
            >
              <BaseStack component="div">
                <BaseInput
                  type="hidden"
                  name="form-name"
                  :value="$config.netlifyFormName"
                />
                <BaseInput
                  type="text"
                  name="bot-field"
                  :value="contactFormValue.botField"
                  @input="updateContactFormBotFieldValue"
                />
                <BaseInput
                  type="text"
                  name="name"
                  required
                  :value="contactFormValue.name"
                  :placeholder="
                    shortTextMap.get(
                      'index-page-contact-section-name-input-placeholder'
                    )
                  "
                  @input="updateContactFormNameValue"
                />
                <BaseInput
                  type="email"
                  name="email"
                  required
                  :value="contactFormValue.email"
                  :placeholder="
                    shortTextMap.get(
                      'index-page-contact-section-email-input-placeholder'
                    )
                  "
                  @input="updateContactFormEmailValue"
                />
                <BaseTextarea
                  name="message"
                  required
                  :value="contactFormValue.message"
                  :placeholder="
                    shortTextMap.get(
                      'index-page-contact-section-message-textarea-placeholder'
                    )
                  "
                  @input="updateContactFormMessageValue"
                />
                <BaseBox />
                <BaseButton type="submit">
                  {{ shortTextMap.get('index-page-contact-section-button') }}
                </BaseButton>
              </BaseStack>
            </BaseBox>
          </PrimaryBody>
        </BaseStack>
      </BaseStack>
    </BaseStack>

    <BaseBackdrop component="div" :open="backdropOpen">
      <BaseBox v-show="contactFormSending" component="p">...</BaseBox>
      <BaseBox v-show="contactFormSucceeded" component="p">
        {{
          $accessor.resources.longTextMap.get(
            'global-backdrop-submission-success'
          )
        }}
      </BaseBox>
      <BaseBox v-show="contactFormFailed" component="p">
        {{
          $accessor.resources.longTextMap.get(
            'global-backdrop-submission-failure'
          )
        }}
      </BaseBox>
    </BaseBackdrop>
  </Fragment>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  createErrorCatchableAsyncData,
  createStoreReadyAsyncData,
} from '@/models/AsyncData'
import { FormEvent } from '@/models/FormEvent'
import {
  ContactFormValue,
  createURLSearchParams,
} from '@/models/ContactFormValue'
import { post } from '@/models/RequestInfo'
import { wait } from '@/models/Milliseconds'
import { Page } from '@/models/Page'
import { createPage } from '@/models/PageEntry'
import { PageFields } from '@/models/PageFields'
import { scrollOffsetParentTo } from '@/models/Selectors'
import { Work } from '@/models/Work'
import { createWork } from '@/models/WorkEntry'
import { WorkFields } from '@/models/WorkFields'

type Data = Page & {
  workList: Work[]
  contactFormValue: ContactFormValue
  contactFormStatus: 'sending' | 'succeeded' | 'failed'
  backdropOpen: boolean
}
type Methods = {
  postAndReport(formEvent: FormEvent<HTMLFormElement>): Promise<void>
  updateContactFormBotFieldValue(formEvent: FormEvent<HTMLInputElement>): void
  updateContactFormNameValue(formEvent: FormEvent<HTMLInputElement>): void
  updateContactFormEmailValue(formEvent: FormEvent<HTMLInputElement>): void
  updateContactFormMessageValue(formEvent: FormEvent<HTMLTextAreaElement>): void
}
type Computed = {}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'IndexPage',

  beforeRouteUpdate(to, from, next) {
    scrollOffsetParentTo(to.hash, true)
    next()
  },

  asyncData: createErrorCatchableAsyncData(
    createStoreReadyAsyncData(
      async ({ route, $config, $contentfulClientApi }) => {
        const { items: pageEntryList } =
          await $contentfulClientApi.withoutUnresolvableLinks.getEntries<PageFields>(
            { content_type: 'page', 'fields.path': '/' }
          )
        if (pageEntryList.length < 1) throw new Error('No page entry')

        const { items: workEntryList } =
          await $contentfulClientApi.withoutUnresolvableLinks.getEntries<WorkFields>(
            { content_type: 'work', limit: $config.indexPageWorkListLength }
          )

        const ogUrl = `${$config.siteUrl}${route.path}`
        const page = createPage(pageEntryList[0], ogUrl)
        const workList = workEntryList.map(createWork)

        return {
          ...page,
          workList,
          contactFormValue: {
            botField: '',
            name: '',
            email: '',
            message: '',
          },
          contactFormStatus: 'sending',
          backdropOpen: false,
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

  computed: {
    contactFormSending() {
      return this.contactFormStatus === 'sending'
    },
    contactFormSucceeded() {
      return this.contactFormStatus === 'succeeded'
    },
    contactFormFailed() {
      return this.contactFormStatus === 'failed'
    },
  },

  mounted() {
    scrollOffsetParentTo(this.$route.hash)
  },

  methods: {
    async postAndReport({ target }) {
      this.backdropOpen = true
      this.contactFormStatus = 'sending'
      const urlSearchParams = createURLSearchParams(this.contactFormValue)
      const { ok } = await post(target.action, urlSearchParams)
      this.contactFormStatus = ok ? 'succeeded' : 'failed'
      await wait(this.$config.globalBackdropDelay)
      this.backdropOpen = false
    },

    updateContactFormBotFieldValue({ target }) {
      this.contactFormValue.botField = target.value
    },

    updateContactFormNameValue({ target }) {
      this.contactFormValue.name = target.value
    },

    updateContactFormEmailValue({ target }) {
      this.contactFormValue.email = target.value
    },

    updateContactFormMessageValue({ target }) {
      this.contactFormValue.message = target.value
    },
  },
})
</script>
