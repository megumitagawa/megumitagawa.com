import * as Contentful from 'contentful'
import { LongTextFields } from '@/models/LongTextFields'

export type LongTextEntry =
  Contentful.EntryWithLinkResolutionAndWithoutUnresolvableLinks<LongTextFields>
