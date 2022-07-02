import * as Contentful from 'contentful'
import * as CFRichTextTypes from '@contentful/rich-text-types'
import { mutationTree } from 'typed-vuex'

export const state = () => ({
  shortTextMap: new Map<string, string>(),
  longTextMap: new Map<string, string>(),
  richTextMap: new Map<string, CFRichTextTypes.Document>(),
  mediaMap: new Map<string, Contentful.Asset>(),
})

type ResourceState = ReturnType<typeof state>

export const mutations = mutationTree(state, {
  set(state, value: Partial<ResourceState>) {
    const { shortTextMap, longTextMap, richTextMap, mediaMap } = value
    if (typeof shortTextMap !== 'undefined') state.shortTextMap = shortTextMap
    if (typeof longTextMap !== 'undefined') state.longTextMap = longTextMap
    if (typeof richTextMap !== 'undefined') state.richTextMap = richTextMap
    if (typeof mediaMap !== 'undefined') state.mediaMap = mediaMap
  },
})
