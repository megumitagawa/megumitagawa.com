import * as Contentful from 'contentful'
import { RichTextFields } from '~/models/RichTextFields'

export type RichTextEntry =
  Contentful.EntryWithLinkResolutionAndWithoutUnresolvableLinks<RichTextFields>
