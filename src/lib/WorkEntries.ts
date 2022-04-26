import * as Contentful from 'contentful'
import { PagerData } from '@/lib/PagerData'
import { WorkFields } from '@/lib/WorkFields'

export type WorkEntries =
  Contentful.EntryCollectionWithLinkResolutionAndWithoutUnresolvableLinks<WorkFields>

type CreatePagerData = (
  workEntries: WorkEntries,
  currentIndex: number
) => PagerData

export const createPagerData: CreatePagerData = (workEntries, currentIndex) => {
  const { total, limit } = workEntries
  const totalIndex = Math.ceil(total / limit)
  const maybePreviousIndex = currentIndex - 1
  const maybeNextIndex = currentIndex + 1

  return {
    currentIndex,
    previousIndex: maybePreviousIndex < 1 ? null : maybePreviousIndex,
    nextIndex: maybeNextIndex > totalIndex ? null : maybeNextIndex,
    totalIndex,
  }
}

type CreateNuxtOptionsGenerateRoute = (
  workEntries: WorkEntries,
  pathPrefix: string
) => string[]

export const createNuxtOptionsGenerateRoute: CreateNuxtOptionsGenerateRoute = (
  workEntries,
  pathPrefix
) => {
  const { total, limit } = workEntries
  const totalIndex = Math.ceil(total / limit)

  return new Array(totalIndex)
    .fill(pathPrefix)
    .map((item, index) => `${item}${index + 1}`)
}
