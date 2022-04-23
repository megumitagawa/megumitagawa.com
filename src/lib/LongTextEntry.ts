import * as Contentful from 'contentful'
import { LongTextFields } from '@/lib/LongTextFields'

export type LongTextEntry =
  Contentful.EntryWithLinkResolutionAndWithoutUnresolvableLinks<LongTextFields>
