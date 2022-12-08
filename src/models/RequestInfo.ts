type SubmitPostRequest = (
  requestInfo: RequestInfo,
  bodyInit: BodyInit,
  headersInit?: HeadersInit
) => Promise<Response>

export const post: SubmitPostRequest = async (
  requestInfo,
  bodyInit,
  headersInit = { 'Content-Type': 'application/x-www-form-urlencoded' }
) => {
  const response = await fetch(requestInfo, {
    method: 'post',
    body: bodyInit,
    headers: headersInit,
  })
  return response
}
