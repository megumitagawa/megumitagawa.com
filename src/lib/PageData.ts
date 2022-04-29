import * as Contentful from 'contentful'
import { ResourcesData } from './ResourcesData'

export type PageData = {
  title: string
  description: string
  ogImage:
    | Contentful.EntryWithLinkResolutionAndWithoutUnresolvableLinks<Contentful.AssetFields>
    | undefined
} & ResourcesData
