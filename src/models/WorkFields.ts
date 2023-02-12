/**
 * Based on output by TS Content Types Generator App
 * https://github.com/marcolink/cf-content-types-generator-app
 */

import * as CFRichTextTypes from '@contentful/rich-text-types'
import * as Contentful from 'contentful'

export interface WorkFields {
  entryTitle: Contentful.EntryFields.Symbol
  title: Contentful.EntryFields.Symbol
  content?: CFRichTextTypes.Document
  featuredMediaList?: Contentful.Asset[]
  date: Contentful.EntryFields.Date
}
