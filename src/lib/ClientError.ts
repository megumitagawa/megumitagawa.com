import { NuxtError } from '@nuxt/types'
import { ErrorLike } from '@/lib/ErrorLike'

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
