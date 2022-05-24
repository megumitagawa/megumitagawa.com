import { NuxtError } from '@nuxt/types'
import { ErrorLike } from '@/models/ErrorLike'

export type ClientError = Error | ErrorLike | ErrorEvent | PromiseRejectionEvent

type CreateNuxtError = (clientError: ClientError) => NuxtError

export const createNuxtErrorFromClientError: CreateNuxtError = (
  clientError
) => {
  const message =
    'message' in clientError ? clientError.message : `${clientError.reason}`
  return { message }
}
