import * as Contentful from 'contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { ResourcesData } from '@/lib/ResourcesData'
import { ResourcesFields } from '@/lib/ResourcesFields'

export type ResourcesEntry =
  Contentful.EntryWithLinkResolutionAndWithoutUnresolvableLinks<ResourcesFields>

type CreateResourcesData = (resourcesEntry: ResourcesEntry) => ResourcesData

export const createResourcesData: CreateResourcesData = (resourcesEntry) => {
  const {
    shortTextList = [],
    longTextList = [],
    richTextList = [],
    mediaList = [],
  } = resourcesEntry.fields
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
    shortTextMap,
    longTextMap,
    htmlStringRichTextMap,
    mediaMap,
  }
}
