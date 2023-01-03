<template>
  <Title>{{ title }}</Title>
  <Meta
    v-for="metaItem of meta"
    :key="metaItem.hid"
    :name="metaItem.name"
    :content="metaItem.content"
  />

  <div>
    {{ shortTextMap.get('index-page-works-section-heading') ?? '' }}
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
    <RichTextRenderer :document="work.content" />
  </div>
  <NuxtLink v-if="workList.length" to="/works/page/1">
    {{ shortTextMap.get('index-page-works-section-link') ?? '' }}
  </NuxtLink>
  <div v-else>
    {{ shortTextMap.get('index-page-no-entry-message') ?? '' }}
  </div>

  <div>
    {{ shortTextMap.get('index-page-profile-section-heading') ?? '' }}
  </div>
  <img
    :src="`https:${
      mediaMap.get('index-page-profile-section')?.fields?.file?.url ?? ''
    }`"
    :width="primaryContentWidth"
    :height="
      primaryContentWidth *
      ((mediaMap.get('index-page-profile-section')?.fields?.file?.details?.image
        ?.height ?? 0) /
        (mediaMap.get('index-page-profile-section')?.fields?.file?.details
          ?.image?.width ?? 0))
    "
    :alt="mediaMap.get('index-page-profile-section')?.fields?.description ?? ''"
    loading="lazy"
  />
  <div>
    {{ shortTextMap.get('index-page-profile-section-name-ja') ?? '' }}
  </div>
  <RichTextRenderer
    :document="
      richTextMap.get('index-page-profile-section-ja') ?? EMPTY_DOCUMENT
    "
  />
  <div>
    {{ shortTextMap.get('index-page-profile-section-name-en') ?? '' }}
  </div>
  <RichTextRenderer
    :document="
      richTextMap.get('index-page-profile-section-en') ?? EMPTY_DOCUMENT
    "
  />

  <div>
    {{ shortTextMap.get('index-page-contact-section-heading') ?? '' }}
  </div>
  <form
    :name="netlifyFormName"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    @submit.prevent="postAndReport"
  >
    <input
      type="hidden"
      name="form-name"
      :value="contactFormValue['form-name']"
    />
    <input
      type="text"
      name="bot-field"
      :value="contactFormValue.botField"
      @input="updateContactFormBotFieldValue"
    />
    <input
      type="text"
      name="name"
      required
      :value="contactFormValue.name"
      :placeholder="
        shortTextMap.get('index-page-contact-section-name-input-placeholder') ??
        ''
      "
      @input="updateContactFormNameValue"
    />
    <input
      type="email"
      name="email"
      required
      :value="contactFormValue.email"
      :placeholder="
        shortTextMap.get(
          'index-page-contact-section-email-input-placeholder'
        ) ?? ''
      "
      @input="updateContactFormEmailValue"
    />
    <textarea
      name="message"
      required
      :value="contactFormValue.message"
      :placeholder="
        shortTextMap.get(
          'index-page-contact-section-message-textarea-placeholder'
        ) ?? ''
      "
      @input="updateContactFormMessageValue"
    />
    <button type="submit">
      {{ shortTextMap.get('index-page-contact-section-button') ?? '' }}
    </button>
  </form>

  <div v-show="backdropOpen">
    <div v-if="contactFormSending">...</div>
    <div v-else-if="contactFormSucceeded">
      {{ longTextMap.get('index-page-backdrop-submission-success') }}
    </div>
    <div v-else-if="contactFormFailed">
      {{ longTextMap.get('index-page-backdrop-submission-failure') }}
    </div>
  </div>
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
