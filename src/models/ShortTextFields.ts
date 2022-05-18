/**
 * Based on output by TS Content Types Generator App
 * https://github.com/marcolink/cf-content-types-generator-app
 */

import * as Contentful from 'contentful'

export interface ShortTextFields {
  entryTitle: Contentful.EntryFields.Symbol
  value: Contentful.EntryFields.Symbol
  slug: Contentful.EntryFields.Symbol
}
