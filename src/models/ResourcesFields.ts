/**
 * Based on output by TS Content Types Generator App
 * https://github.com/marcolink/cf-content-types-generator-app
 */

import * as Contentful from 'contentful'
import { ShortTextFields } from '@/models/ShortTextFields'
import { LongTextFields } from '@/models/LongTextFields'
import { RichTextFields } from '@/models/RichTextFields'
import { MediaFields } from '@/models/MediaFields'

export interface ResourcesFields {
  entryTitle: Contentful.EntryFields.Symbol
  slug: Contentful.EntryFields.Symbol
  shortTextList?: Contentful.Entry<ShortTextFields>[]
  longTextList?: Contentful.Entry<LongTextFields>[]
  richTextList?: Contentful.Entry<RichTextFields>[]
  mediaList?: Contentful.Entry<MediaFields>[]
}
