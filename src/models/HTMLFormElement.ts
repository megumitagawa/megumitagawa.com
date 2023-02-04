export const isHTMLFormElement = (value: unknown): value is HTMLFormElement =>
  !!value &&
  typeof value === 'object' &&
  'nodeName' in value &&
  value.nodeName === 'FORM'
