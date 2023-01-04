<template>
  <Title>{{ title }}</Title>
  <Meta
    v-for="metaItem of meta"
    :key="metaItem.hid"
    :name="metaItem.name"
    :content="metaItem.content"
  />

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
          <SecondaryHeading component="h3">
            {{ work.title }}
          </SecondaryHeading>
          <SecondaryBody component="div">
            <RichTextRenderer :document="work.content" />
          </SecondaryBody>
        </BaseStack>
      </PrimaryBody>
      <BaseButton
        v-if="workList.length"
        component="NuxtLink"
        to="/works/page/1"
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
              mediaMap.get('index-page-profile-section')?.fields.file?.url || ''
            }`"
            :width="primaryContentWidth"
            :height="
              primaryContentWidth *
              ((mediaMap.get('index-page-profile-section')?.fields.file?.details
                .image?.height ?? 0) /
                (mediaMap.get('index-page-profile-section')?.fields.file
                  ?.details.image?.width ?? 0))
            "
            :alt="
              mediaMap.get('index-page-profile-section')?.fields.description ||
              ''
            "
            loading="lazy"
          />
          <SecondaryHeading component="h3">
            {{ shortTextMap.get('index-page-profile-section-name-ja') }}
          </SecondaryHeading>
          <SecondaryBody component="div">
            <RichTextRenderer
              :document="
                richTextMap.get('index-page-profile-section-ja') ??
                EMPTY_DOCUMENT
              "
            />
          </SecondaryBody>
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
          <SecondaryBody component="div">
            <RichTextRenderer
              :document="
                richTextMap.get('index-page-profile-section-en') ??
                EMPTY_DOCUMENT
              "
            />
          </SecondaryBody>
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
              type="hidden"
              name="form-name"
              :value="contactFormValue['form-name']"
            />
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
</template>

<script lang="ts" setup>
// contentful-rich-text-vue-renderer has no type declaration
// @ts-ignore
import RichTextRenderer from 'contentful-rich-text-vue-renderer'
import { EMPTY_DOCUMENT } from '@contentful/rich-text-types'
import { createURLSearchParams } from '@/models/ContactFormValue'
import { isHTMLFormElement } from '@/models/HTMLFormElement'
import { isHTMLInputElement } from '@/models/HTMLInputElement'
import { isHTMLTextAreaElement } from '@/models/HTMLTextareaElement'
import { wait } from '@/models/Milliseconds'
import { createPage } from '@/models/PageEntry'
import { PageFields } from '@/models/PageFields'
import { post } from '@/models/RequestInfo'
import { createWork } from '@/models/WorkEntry'
import { WorkFields } from '@/models/WorkFields'

const {
  $contentfulClientApi,
  $computedTailwindTheme: { primaryContentWidth },
} = useNuxtApp()
const { path } = useRoute()
const {
  public: {
    indexPageWorkListLength,
    indexPageBackdropDelay,
    netlifyFormName,
    siteUrl,
  },
} = useRuntimeConfig()

const { data: pageEntriesRef } = await useAsyncData('page/index', () =>
  $contentfulClientApi.withoutUnresolvableLinks.getEntries<PageFields>({
    content_type: 'page',
    'fields.path': '/',
    include: 2,
  })
)
if (!pageEntriesRef.value) throw createError('No index page response')
const { items: pageEntryList } = pageEntriesRef.value
if (pageEntryList.length < 1) throw createError('No index page entry')
const ogUrl = `${siteUrl}${path}`
const { longTextMap, mediaMap, meta, richTextMap, shortTextMap, title } =
  createPage(pageEntryList[0], ogUrl)

const { data: workEntriesRef } = await useAsyncData(
  `work/${indexPageWorkListLength}`,
  () =>
    $contentfulClientApi.withoutUnresolvableLinks.getEntries<WorkFields>({
      content_type: 'work',
      limit: indexPageWorkListLength,
    })
)
if (!workEntriesRef.value) throw createError('No work response')
const { items: workEntryList } = workEntriesRef.value
const workList = workEntryList.map(createWork)

const contactFormValue = ref({
  'form-name': netlifyFormName,
  botField: '',
  name: '',
  email: '',
  message: '',
})
const contactFormStatus = ref('sending')
const contactFormSending = computed(() => contactFormStatus.value === 'sending')
const contactFormSucceeded = computed(
  () => contactFormStatus.value === 'succeeded'
)
const contactFormFailed = computed(() => contactFormStatus.value === 'failed')
const backdropOpen = ref(false)

const postAndReport = ({ target }: Event): void => {
  if (!isHTMLFormElement(target)) return
  backdropOpen.value = true
  contactFormStatus.value = 'sending'
  const urlSearchParams = createURLSearchParams(contactFormValue.value)
  ;(async () => {
    const { ok } = await post(target.action, urlSearchParams)
    contactFormStatus.value = ok ? 'succeeded' : 'failed'
    await wait(indexPageBackdropDelay)
    backdropOpen.value = false
  })()
}

const updateContactFormBotFieldValue = ({ target }: Event): void => {
  if (!isHTMLInputElement(target)) return
  contactFormValue.value.botField = target.value
}

const updateContactFormNameValue = ({ target }: Event): void => {
  if (!isHTMLInputElement(target)) return
  contactFormValue.value.name = target.value
}

const updateContactFormEmailValue = ({ target }: Event): void => {
  if (!isHTMLInputElement(target)) return
  contactFormValue.value.email = target.value
}

const updateContactFormMessageValue = ({ target }: Event): void => {
  if (!isHTMLTextAreaElement(target)) return
  contactFormValue.value.message = target.value
}
</script>
