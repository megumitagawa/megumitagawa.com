import * as Contentful from 'contentful'
import * as CFRichTextTypes from '@contentful/rich-text-types'
import { Page } from '@/models/Page'
import { PageFields } from '@/models/PageFields'
import { createResources } from '@/models/ResourcesEntry'

export type PageEntry =
  Contentful.EntryWithLinkResolutionAndWithoutUnresolvableLinks<PageFields>

type CreatePage = (pageEntry: PageEntry, ogUrl: string) => Page

export const createPage: CreatePage = (pageEntry, ogUrl) => {
  const {
    title,
    description,
    ogImage,
    resources: resourcesEntry,
  } = pageEntry.fields
  const meta = [
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
  ]
  const resources = resourcesEntry
    ? createResources(resourcesEntry)
    : {
        shortTextMap: new Map<string, string>(),
        longTextMap: new Map<string, string>(),
        richTextMap: new Map<string, CFRichTextTypes.Document>(),
        mediaMap: new Map<string, Contentful.Asset>(),
      }

  return {
    title,
    meta,
    description,
    ...resources,
  }
}
