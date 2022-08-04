type UpdateViewportHeight = (window: Window & typeof globalThis) => void

export const updateViewportHeight: UpdateViewportHeight = (window) => {
  const vh = window.innerHeight * 0.01
  window.document.documentElement.style.setProperty('--vh', `${vh}px`)
}
