import * as Contentful from 'contentful'
import { WorkFields } from '@/models/WorkFields'

export type WorkEntries =
  Contentful.EntryCollectionWithLinkResolutionAndWithoutUnresolvableLinks<WorkFields>

type CreateTotalPageNumber = (workEntries: WorkEntries) => number

export const createTotalPageNumber: CreateTotalPageNumber = (workEntries) => {
  const { total, limit } = workEntries
  return Math.ceil(total / limit)
}

type CreateDynamicRouteList = (
  workEntries: WorkEntries,
  pathPrefix: string
) => string[]

export const createDynamicRouteList: CreateDynamicRouteList = (
  workEntries,
  pathPrefix
) =>
  new Array(createTotalPageNumber(workEntries))
    .fill(pathPrefix)
    .map((item, index) => `${item}${index + 1}`)
