import * as Contentful from 'contentful'

export interface Resources {
  shortTextMap: Map<string, string>
  longTextMap: Map<string, string>
  htmlStringRichTextMap: Map<string, string>
  mediaMap: Map<string, Contentful.Asset>
}
