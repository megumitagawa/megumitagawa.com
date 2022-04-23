/**
 * Based on output by TS Content Types Generator App
 * https://github.com/marcolink/cf-content-types-generator-app
 */

import * as Contentful from 'contentful'
import { ShortTextFields } from '@/lib/ShortTextFields'
import { LongTextFields } from '@/lib/LongTextFields'
import { RichTextFields } from '@/lib/RichTextFields'
import { MediaFields } from '@/lib/MediaFields'

export interface PageFields {
  entryTitle: Contentful.EntryFields.Symbol
  path: Contentful.EntryFields.Symbol
  title: Contentful.EntryFields.Symbol
  description: Contentful.EntryFields.Symbol
  ogImage: Contentful.Asset
  shortTextList?: Contentful.Entry<ShortTextFields>[]
  longTextList?: Contentful.Entry<LongTextFields>[]
  richTextList?: Contentful.Entry<RichTextFields>[]
  mediaList?: Contentful.Entry<MediaFields>[]
}
