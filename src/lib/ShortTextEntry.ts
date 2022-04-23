import * as Contentful from 'contentful'
import { ShortTextFields } from '@/lib/ShortTextFields'

export type ShortTextEntry =
  Contentful.EntryWithLinkResolutionAndWithoutUnresolvableLinks<ShortTextFields>
