import * as Contentful from 'contentful'
import { mutationTree } from 'typed-vuex'

export const state = () => ({
  shortTextMap: new Map<string, string>(),
  longTextMap: new Map<string, string>(),
  htmlStringRichTextMap: new Map<string, string>(),
  mediaMap: new Map<string, Contentful.Asset>(),
})

type ResourceDataState = ReturnType<typeof state>

export const mutations = mutationTree(state, {
  set(state, value: Partial<ResourceDataState>) {
    const { shortTextMap, longTextMap, htmlStringRichTextMap, mediaMap } = value
    if (typeof shortTextMap !== 'undefined') state.shortTextMap = shortTextMap
    if (typeof longTextMap !== 'undefined') state.longTextMap = longTextMap
    if (typeof htmlStringRichTextMap !== 'undefined')
      state.htmlStringRichTextMap = htmlStringRichTextMap
    if (typeof mediaMap !== 'undefined') state.mediaMap = mediaMap
  },
})
