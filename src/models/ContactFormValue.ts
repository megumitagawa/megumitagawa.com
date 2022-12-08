export type ContactFormValue = {
  'form-name': string
  botField: string
  name: string
  email: string
  message: string
}

type CreateURLSearchParams = (
  contactFormValue: ContactFormValue
) => URLSearchParams

export const createURLSearchParams: CreateURLSearchParams = (
  contactFormValue
) => new URLSearchParams(contactFormValue)
