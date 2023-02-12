import * as Contentful from 'contentful'
import * as CFRichTextTypes from '@contentful/rich-text-types'

export interface Work {
  id: string
  title: string
  content: CFRichTextTypes.Document
  featuredMediaList: Contentful.Asset[]
  date: Contentful.EntryFields.Date
}
