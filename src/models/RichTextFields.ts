/**
 * Based on output by TS Content Types Generator App
 * https://github.com/marcolink/cf-content-types-generator-app
 */

import * as Contentful from 'contentful'
import * as CFRichTextTypes from '@contentful/rich-text-types'

export interface RichTextFields {
  entryTitle: Contentful.EntryFields.Symbol
  value: CFRichTextTypes.Document
  slug: Contentful.EntryFields.Symbol
}
