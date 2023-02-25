import * as Contentful from 'contentful'
import * as CFRichTextTypes from '@contentful/rich-text-types'
import { UrlFields } from '@/models/UrlFields'

export interface Work {
  id: string
  title: string
  content: CFRichTextTypes.Document
  featuredMediaList: Contentful.Asset[]
  featuredUrlList: Contentful.Entry<UrlFields>[]
  date: Contentful.EntryFields.Date
}
