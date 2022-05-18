import * as Contentful from 'contentful'
import { MediaFields } from '@/models/MediaFields'

export type MediaEntry =
  Contentful.EntryWithLinkResolutionAndWithoutUnresolvableLinks<MediaFields>
