type GetSelectedLabel = (htmlSelectElement: HTMLSelectElement) => string

export const isHTMLSelectElement = (
  value: unknown
): value is HTMLSelectElement =>
  !!value &&
  typeof value === 'object' &&
  'nodeName' in value &&
  value.nodeName === 'SELECT'

export const getSelectedLabel: GetSelectedLabel = (htmlSelectElement) => {
  const { selectedIndex, children } = htmlSelectElement
  const { label } = children[selectedIndex] as HTMLOptionElement
  return label
}
