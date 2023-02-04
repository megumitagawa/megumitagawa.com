export const isHTMLTextAreaElement = (
  value: unknown
): value is HTMLTextAreaElement =>
  !!value &&
  typeof value === 'object' &&
  'nodeName' in value &&
  value.nodeName === 'TEXTAREA'
