import * as Contentful from 'contentful'

export interface Work {
  id: string
  title: string
  htmlStringContent: string
  featuredMediaList: Contentful.Asset[]
}
