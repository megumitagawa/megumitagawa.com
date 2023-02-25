/**
 * Based on output by TS Content Types Generator App
 * https://github.com/marcolink/cf-content-types-generator-app
 */

import * as CFRichTextTypes from '@contentful/rich-text-types'
import * as Contentful from 'contentful'
import { UrlFields } from '@/models/UrlFields'

export interface WorkFields {
  entryTitle: Contentful.EntryFields.Symbol
  title: Contentful.EntryFields.Symbol
  content?: CFRichTextTypes.Document
  featuredMediaList?: Contentful.Asset[]
  featuredUrlList?: Contentful.Entry<UrlFields>[]
  date: Contentful.EntryFields.Date
}
