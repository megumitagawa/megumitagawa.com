import * as Contentful from 'contentful'
import * as CFRichTextTypes from '@contentful/rich-text-types'

interface State {
  shortTextMap: Map<string, string>
  longTextMap: Map<string, string>
  richTextMap: Map<string, CFRichTextTypes.Document>
  mediaMap: Map<string, Contentful.Asset>
}

export const useResourcesStore = defineStore('resources', {
  state: (): State => ({
    shortTextMap: new Map(),
    longTextMap: new Map(),
    richTextMap: new Map(),
    mediaMap: new Map(),
  }),
})
