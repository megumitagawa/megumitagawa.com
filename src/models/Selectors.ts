type Selectors = string

type ScrollOffsetParentTo = (selectors: Selectors, smooth?: boolean) => void

export const scrollOffsetParentTo: ScrollOffsetParentTo = (
  selectors,
  smooth = false
) => {
  if (!selectors) return
  const destinationEl = document.querySelector<HTMLElement>(selectors)
  if (!destinationEl) return
  const offsetParentEl = destinationEl.offsetParent
  if (!offsetParentEl) return
  offsetParentEl.scroll({
    top: destinationEl.offsetTop,
    behavior: smooth ? 'smooth' : 'auto',
  })
}
