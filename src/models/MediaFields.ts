/**
 * Based on output by TS Content Types Generator App
 * https://github.com/marcolink/cf-content-types-generator-app
 */

import * as Contentful from 'contentful'

export interface MediaFields {
  entryTitle: Contentful.EntryFields.Symbol
  value: Contentful.Asset
  slug: Contentful.EntryFields.Symbol
}
