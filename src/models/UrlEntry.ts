import * as Contentful from 'contentful'
import { UrlFields } from '@/models/UrlFields'

export type UrlEntry =
  Contentful.EntryWithLinkResolutionAndWithoutUnresolvableLinks<UrlFields>
