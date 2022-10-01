<template>
  <Fragment>
    <BaseBox
      component="div"
      :class="[
        'w-full h-[calc(theme(height.screen)_-_theme(spacing.21))]',
        // To avoid updating scroll position in iOS >= 15.4
        'h-[calc(theme(height.large-screen)_-_theme(spacing.21))]',
        'lg:h-0',
      ]"
    />
    <BaseStack component="div" spacing="xl">
      <BaseStack component="section" spacing="md">
        <BaseBox class="relative w-full">
          <BaseBox id="works" :class="['absolute -top-21', 'lg:-top-5']" />
          <PrimaryHeading component="h2">
            {{ shortTextMap.get('index-page-works-section-heading') }}
          </PrimaryHeading>
        </BaseBox>
        <PrimaryBody
          v-for="work of workList"
          :key="work.id"
          component="article"
        >
          <BaseStack component="div" spacing="md">
            <BaseImage
              v-for="featuredMedia of work.featuredMediaList"
              :key="featuredMedia.sys.id"
              :src="`https:${featuredMedia.fields.file.url}`"
              :width="primaryContentWidth"
              :height="
                primaryContentWidth *
                (featuredMedia.fields.file.details.image.height /
                  featuredMedia.fields.file.details.image.width)
              "
              :alt="featuredMedia.fields.description || ''"
              loading="lazy"
            />
            <SecondaryHeading component="h3">
              {{ work.title }}
            </SecondaryHeading>
            <SecondaryBody :document="work.content" component="div" />
          </BaseStack>
        </PrimaryBody>
        <BaseButton
          v-if="workList.length"
          component="NuxtLink"
          to="/works"
          :full-width="true"
        >
          {{ shortTextMap.get('index-page-works-section-link') }}
          <template #endIcon>
            <RightChevonIcon />
          </template>
        </BaseButton>
        <PrimaryBody v-else component="p">
          {{ shortTextMap.get('index-page-no-entry-message') }}
        </PrimaryBody>
      </BaseStack>

      <BaseStack component="section" spacing="md">
        <BaseBox class="relative w-full">
          <BaseBox id="profile" :class="['absolute -top-21', 'lg:-top-5']" />
          <PrimaryHeading component="h2">
            {{ shortTextMap.get('index-page-profile-section-heading') }}
          </PrimaryHeading>
        </BaseBox>
        <PrimaryBody component="div">
          <BaseStack component="div" spacing="md">
            <BaseImage
              :src="`https:${
                mediaMap.get('index-page-profile-section').fields.file.url
              }`"
              :width="primaryContentWidth"
              :height="
                primaryContentWidth *
                (mediaMap.get('index-page-profile-section').fields.file.details
                  .image.height /
                  mediaMap.get('index-page-profile-section').fields.file.details
                    .image.width)
              "
              :alt="
                mediaMap.get('index-page-profile-section').fields.description ||
                ''
              "
              loading="lazy"
            />
            <SecondaryHeading component="h3">
              {{ shortTextMap.get('index-page-profile-section-name-ja') }}
            </SecondaryHeading>
            <SecondaryBody
              :document="richTextMap.get('index-page-profile-section-ja')"
              component="div"
            />
            <BaseBox
              component="hr"
              :class="[
                'box-content block w-full h-1.5 border-t-0 py-5',
                'bg-quintuple-dots-icon bg-no-repeat bg-center',
              ]"
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

      <BaseStack component="section" spacing="md">
        <BaseBox class="relative w-full">
          <BaseBox id="contact" :class="['absolute -top-21', 'lg:-top-5']" />
          <PrimaryHeading component="h2">
            {{ shortTextMap.get('index-page-contact-section-heading') }}
          </PrimaryHeading>
        </BaseBox>
        <PrimaryBody component="div">
          <BaseForm
            :name="$config.netlifyFormName"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            @submit="postAndReport"
          >
            <template #default="{ valid }">
              <BaseInput
                type="text"
                name="bot-field"
                invisible
                :value="contactFormValue.botField"
                placeholder="Bot Field"
                @input="updateContactFormBotFieldValue"
              />
              <BaseStack component="div" spacing="md">
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
                <BaseButton
                  type="submit"
                  color="info"
                  :full-width="true"
                  :disabled="!valid"
                  opaque
                >
                  {{ shortTextMap.get('index-page-contact-section-button') }}
                </BaseButton>
              </BaseStack>
            </template>
          </BaseForm>
        </PrimaryBody>
      </BaseStack>
    </BaseStack>

    <BaseBackdrop component="div" :open="backdropOpen">
      <BaseBox
        component="p"
        class="flex justify-center w-1/2 min-w-screens.xs px-5 whitespace-pre-line"
      >
        <template v-if="contactFormSending">...</template>
        <template v-else-if="contactFormSucceeded">{{
          longTextMap.get('index-page-backdrop-submission-success')
        }}</template>
        <template v-else-if="contactFormFailed">{{
          longTextMap.get('index-page-backdrop-submission-failure')
        }}</template>
      </BaseBox>
    </BaseBackdrop>
  </Fragment>
</template>

<script lang="ts">
import Vue from 'vue'
import { theme } from '@/../tailwind.config'
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
import { Work } from '@/models/Work'
import { createWork } from '@/models/WorkEntry'
import { WorkFields } from '@/models/WorkFields'

type Data = Page & {
  workList: Work[]
  contactFormValue: ContactFormValue
  contactFormStatus: 'sending' | 'succeeded' | 'failed'
  backdropOpen: boolean
  primaryContentWidth: number
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

  asyncData: createErrorCatchableAsyncData(
    createStoreReadyAsyncData(
      async ({ route, $config, $contentfulClientApi }) => {
        const { items: pageEntryList } =
          await $contentfulClientApi.withoutUnresolvableLinks.getEntries<PageFields>(
            { content_type: 'page', 'fields.path': '/', include: 2 }
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
            'form-name': $config.netlifyFormName,
            botField: '',
            name: '',
            email: '',
            message: '',
          },
          contactFormStatus: 'sending',
          backdropOpen: false,
          primaryContentWidth: 0,
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

  created() {
    this.primaryContentWidth =
      this.$accessor.currentLayout.pageContentWidth -
      parseFloat(theme.extend.fontSize['px-base']) *
        parseFloat(theme.extend.spacing[5]) *
        2
  },

  methods: {
    async postAndReport({ target }) {
      this.backdropOpen = true
      this.contactFormStatus = 'sending'
      const urlSearchParams = createURLSearchParams(this.contactFormValue)
      const { ok } = await post(target.action, urlSearchParams)
      this.contactFormStatus = ok ? 'succeeded' : 'failed'
      await wait(this.$config.indexPageBackdropDelay)
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
