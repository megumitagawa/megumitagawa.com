/**
 * For Safari < v14
 */

type AddChangeEventListener = (
  mediaQueryList: MediaQueryList,
  listener: (mediaQueryListEvent: MediaQueryListEvent) => void
) => void

export const addChangeEventListener: AddChangeEventListener = (
  mediaQueryList,
  listener
) => {
  if (typeof mediaQueryList.addEventListener === 'function') {
    mediaQueryList.addEventListener('change', listener)
  } else {
    mediaQueryList.addListener(listener)
  }
}

type RemoveChangeEventListener = (
  mediaQueryList: MediaQueryList,
  listener: (mediaQueryListEvent: MediaQueryListEvent) => void
) => void

export const removeChangeEventListener: RemoveChangeEventListener = (
  mediaQueryList,
  listener
) => {
  if (typeof mediaQueryList.removeEventListener === 'function') {
    mediaQueryList.removeEventListener('change', listener)
  } else {
    mediaQueryList.removeListener(listener)
  }
}
