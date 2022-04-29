import * as Contentful from 'contentful'
import { PageData } from '@/lib/PageData'
import { PageFields } from '@/lib/PageFields'
import { PageHead } from '@/lib/PageHead'
import { createResourcesData } from '@/lib/ResourcesEntry'

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
  const { title, description, ogImage, resources } = pageEntry.fields
  const resourcesData = resources
    ? createResourcesData(resources)
    : {
        shortTextMap: new Map<string, string>(),
        longTextMap: new Map<string, string>(),
        htmlStringRichTextMap: new Map<string, string>(),
        mediaMap: new Map<string, Contentful.Asset>(),
      }

  return {
    title,
    description,
    ogImage,
    ...resourcesData,
  }
}
