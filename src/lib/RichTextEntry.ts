import * as Contentful from 'contentful'
import { RichTextFields } from '@/lib/RichTextFields'

export type RichTextEntry =
  Contentful.EntryWithLinkResolutionAndWithoutUnresolvableLinks<RichTextFields>
