import * as Contentful from 'contentful'
import * as CFRichTextTypes from '@contentful/rich-text-types'

export interface Resources {
  shortTextMap: Map<string, string>
  longTextMap: Map<string, string>
  richTextMap: Map<string, CFRichTextTypes.Document>
  mediaMap: Map<string, Contentful.Asset>
}
