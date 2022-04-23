import * as Contentful from 'contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { PageData } from '@/lib/PageData'
import { PageFields } from '@/lib/PageFields'
import { PageHead } from '@/lib/PageHead'

export type PageEntry =
  Contentful.EntryWithLinkResolutionAndWithoutUnresolvableLinks<PageFields>

type CreatePageHead = (pageEntry: PageEntry, ogUrl: string) => PageHead

export const createPageHead: CreatePageHead = (pageEntry, ogUrl) => {
  const { title, description, ogImage } = pageEntry.fields

  return {
    title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: description,
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: title,
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: description,
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: ogImage ? `https:${ogImage.fields.file.url}` : '',
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: ogUrl,
      },
    ],
  }
}

type CreatePageData = (pageEntry: PageEntry) => PageData

export const createPageData: CreatePageData = (pageEntry) => {
  const {
    title,
    description,
    ogImage,
    shortTextList = [],
    longTextList = [],
    richTextList = [],
    mediaList = [],
  } = pageEntry.fields

  const shortTextMap = new Map(
    shortTextList.map(({ fields }) => [fields.slug, fields.value])
  )
  const longTextMap = new Map(
    longTextList.map(({ fields }) => [fields.slug, fields.value])
  )
  const htmlStringRichTextMap = new Map(
    richTextList.map(({ fields }) => [
      fields.slug,
      documentToHtmlString(fields.value),
    ])
  )
  const mediaMap = new Map(
    mediaList.map(({ fields }) => [fields.slug, fields.value])
  )

  return {
    title,
    description,
    ogImage,
    shortTextMap,
    longTextMap,
    htmlStringRichTextMap,
    mediaMap,
  }
}
