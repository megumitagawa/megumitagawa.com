export const isHTMLInputElement = (value: unknown): value is HTMLInputElement =>
  !!value &&
  typeof value === 'object' &&
  'nodeName' in value &&
  value.nodeName === 'INPUT'
