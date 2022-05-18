import { NuxtError } from '@nuxt/types'
import { ErrorLike } from '@/models/ErrorLike'

export type ServerError =
  | Error
  | ErrorLike
  | Parameters<NodeJS.UnhandledRejectionListener>[0]

type CreateNuxtError = (
  serverError: ServerError,
  showingDetails: boolean
) => NuxtError

export const createNuxtErrorFromServerError: CreateNuxtError = (
  serverError,
  showingDetails
) => {
  if (!showingDetails) return { message: 'Server Error' }
  const message =
    serverError && 'message' in serverError
      ? serverError.message
      : 'UnhandledRejection'
  return { message }
}
