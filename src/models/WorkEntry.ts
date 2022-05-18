import * as Contentful from 'contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { Work } from '@/models/Work'
import { WorkFields } from '@/models/WorkFields'

export type WorkEntry =
  Contentful.EntryWithLinkResolutionAndWithoutUnresolvableLinks<WorkFields>

type CreateWork = (workEntry: WorkEntry) => Work

export const createWork: CreateWork = (workEntry) => {
  const { id } = workEntry.sys
  const { title, content, featuredMediaList = [] } = workEntry.fields

  return {
    id,
    title,
    htmlStringContent: content ? documentToHtmlString(content) : '',
    featuredMediaList,
  }
}
