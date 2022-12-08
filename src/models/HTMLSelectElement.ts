type GetSelectedLabel = (htmlSelectElement: HTMLSelectElement) => string

export const getSelectedLabel: GetSelectedLabel = (htmlSelectElement) => {
  const { selectedIndex, children } = htmlSelectElement
  const { label } = children[selectedIndex] as HTMLOptionElement
  return label
}
