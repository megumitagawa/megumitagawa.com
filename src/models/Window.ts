type CreateMediaQueryList = (window: Window, query: string) => MediaQueryList

export const createMediaQueryList: CreateMediaQueryList = (window, query) =>
  window.matchMedia(query)

type GetClientWidth = (window: Window) => number

export const getClientWidth: GetClientWidth = (window) =>
  window.document.documentElement.clientWidth
