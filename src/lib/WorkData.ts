import * as Contentful from 'contentful'

export interface WorkData {
  id: string
  title: string
  htmlStringContent: string
  featuredMediaList: Contentful.Asset[]
}
