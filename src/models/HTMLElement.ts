type ScrollOffsetParentTo = (htmlElement: HTMLElement, smooth?: boolean) => void

export const scrollOffsetParentTo: ScrollOffsetParentTo = (
  htmlElement,
  smooth = false
) => {
  const offsetParentEl = htmlElement.offsetParent
  if (!offsetParentEl) return
  offsetParentEl.scroll({
    top: htmlElement.offsetTop,
    behavior: smooth ? 'smooth' : 'auto',
  })
}
