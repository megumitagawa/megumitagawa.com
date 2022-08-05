type UpdateViewportHeight = (window: Window) => void

export const updateViewportHeight: UpdateViewportHeight = (window) => {
  const vh = window.innerHeight * 0.01
  window.document.documentElement.style.setProperty('--vh', `${vh}px`)
}

type CreateMediaQueryList = (window: Window, query: string) => MediaQueryList

export const createMediaQueryList: CreateMediaQueryList = (window, query) =>
  window.matchMedia(query)

type AddErrorEventListener = (
  window: Window,
  listener: (errorEvent: ErrorEvent) => void
) => void

export const addErrorEventListener: AddErrorEventListener = (
  window,
  listener
) => {
  window.addEventListener('error', listener)
}

type AddUnhandledrejectionEventListener = (
  window: Window,
  listener: (promiseRejectionEvent: PromiseRejectionEvent) => void
) => void

export const addUnhandledrejectionEventListener: AddUnhandledrejectionEventListener =
  (window, listener) => {
    window.addEventListener('unhandledrejection', listener)
  }

type AddResizeEventListener = (
  window: Window,
  listener: (uiEvent: UIEvent) => void
) => void

export const addResizeEventListener: AddResizeEventListener = (
  window,
  listener
) => {
  window.addEventListener('resize', listener)
}

type GetClientWidth = (window: Window) => number

export const getClientWidth: GetClientWidth = (window) =>
  window.document.documentElement.clientWidth

type GetHTMLElement = (window: Window, selectors: string) => HTMLElement | null

export const getHTMLElement: GetHTMLElement = (window, selectors) =>
  selectors ? window.document.querySelector<HTMLElement>(selectors) : null
