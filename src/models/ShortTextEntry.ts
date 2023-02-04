import * as Contentful from 'contentful'
import { ShortTextFields } from '@/models/ShortTextFields'

export type ShortTextEntry =
  Contentful.EntryWithLinkResolutionAndWithoutUnresolvableLinks<ShortTextFields>
