import * as Contentful from 'contentful'

export interface ResourcesData {
  shortTextMap: Map<string, string>
  longTextMap: Map<string, string>
  htmlStringRichTextMap: Map<string, string>
  mediaMap: Map<string, Contentful.Asset>
}
