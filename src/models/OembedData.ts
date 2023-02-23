import {
  type OembedData,
  type VideoTypeData,
} from '@extractus/oembed-extractor'

export const isVideoTypeData = (
  oembedData: OembedData
): oembedData is VideoTypeData => oembedData.type === 'video'
