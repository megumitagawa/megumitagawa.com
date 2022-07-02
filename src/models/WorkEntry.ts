import * as Contentful from 'contentful'
import { EMPTY_DOCUMENT } from '@contentful/rich-text-types'
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
    content: content || EMPTY_DOCUMENT,
    featuredMediaList,
  }
}
