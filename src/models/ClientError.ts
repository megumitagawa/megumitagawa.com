import { NuxtError } from '@nuxt/types'
import { ErrorLike } from '@/models/ErrorLike'

export type ClientError = Error | ErrorLike | ErrorEvent | PromiseRejectionEvent

type CreateNuxtError = (
  clientError: ClientError,
  showingDetails: boolean
) => NuxtError

export const createNuxtErrorFromClientError: CreateNuxtError = (
  clientError,
  showingDetails
) => {
  if (!showingDetails) return { message: 'Client Error' }
  const message =
    'message' in clientError ? clientError.message : `${clientError.reason}`
  return { message }
}
