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

type GetClientWidth = (window: Window) => number

export const getClientWidth: GetClientWidth = (window) =>
  window.document.documentElement.clientWidth
