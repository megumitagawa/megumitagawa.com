import * as Contentful from 'contentful'
import { MediaFields } from '@/lib/MediaFields'

export type MediaEntry =
  Contentful.EntryWithLinkResolutionAndWithoutUnresolvableLinks<MediaFields>
