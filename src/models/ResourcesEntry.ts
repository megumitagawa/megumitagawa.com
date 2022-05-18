import * as Contentful from 'contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { Resources } from '@/models/Resources'
import { ResourcesFields } from '@/models/ResourcesFields'

export type ResourcesEntry =
  Contentful.EntryWithLinkResolutionAndWithoutUnresolvableLinks<ResourcesFields>

type CreateResources = (resourcesEntry: ResourcesEntry) => Resources

export const createResources: CreateResources = (resourcesEntry) => {
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
