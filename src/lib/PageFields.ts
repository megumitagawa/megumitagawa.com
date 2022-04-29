/**
 * Based on output by TS Content Types Generator App
 * https://github.com/marcolink/cf-content-types-generator-app
 */

import * as Contentful from 'contentful'
import { ResourcesFields } from '@/lib/ResourcesFields'

export interface PageFields {
  entryTitle: Contentful.EntryFields.Symbol
  path: Contentful.EntryFields.Symbol
  title: Contentful.EntryFields.Symbol
  description: Contentful.EntryFields.Symbol
  ogImage: Contentful.Asset
  resources: Contentful.Entry<ResourcesFields>
}
