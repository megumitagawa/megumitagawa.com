import { Resources } from './Resources'

export type Page = {
  title: string
  meta: {
    hid: string
    name: string
    content: string
  }[]
  description: string
} & Resources
