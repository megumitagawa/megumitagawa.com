import * as Contentful from 'contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { WorkData } from '@/lib/WorkData'
import { WorkFields } from '@/lib/WorkFields'

export type WorkEntry =
  Contentful.EntryWithLinkResolutionAndWithoutUnresolvableLinks<WorkFields>

type CreateWorkData = (workEntry: WorkEntry) => WorkData

export const createWorkData: CreateWorkData = (workEntry) => {
  const { id } = workEntry.sys
  const { title, content, featuredMediaList = [] } = workEntry.fields

  return {
    id,
    title,
    htmlStringContent: content ? documentToHtmlString(content) : '',
    featuredMediaList,
  }
}
