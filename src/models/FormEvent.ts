/**
 * Inspired by React.FormEvent
 * https://github.com/DefinitelyTyped/DefinitelyTyped/blob/6b280e457f09ab6c9617ad9f124aa02b7136cb84/types/react/index.d.ts#L1243
 */

export interface FormEvent<T = Element> {
  target: T
}

type SubmitPostRequest = (
  formEvent: FormEvent<HTMLFormElement>
) => Promise<Response>

export const submitPostRequest: SubmitPostRequest = async (formEvent) => {
  const { target } = formEvent
  const formData = new FormData(target) as URLSearchParams
  const urlSearchParams = new URLSearchParams(formData).toString()
  const response = await fetch(target.action, {
    method: 'post',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: urlSearchParams,
  })
  return response
}
