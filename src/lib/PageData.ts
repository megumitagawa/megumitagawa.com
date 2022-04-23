import * as Contentful from 'contentful'

export interface PageData {
  title: string
  description: string
  ogImage:
    | Contentful.EntryWithLinkResolutionAndWithoutUnresolvableLinks<Contentful.AssetFields>
    | undefined
  shortTextMap: Map<string, string>
  longTextMap: Map<string, string>
  htmlStringRichTextMap: Map<string, string>
  mediaMap: Map<string, Contentful.Asset>
}
