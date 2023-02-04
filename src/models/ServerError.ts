import { NuxtError } from '@nuxt/types'
import { ErrorLike } from '@/models/ErrorLike'

export type ServerError =
  | Error
  | ErrorLike
  | Parameters<NodeJS.UnhandledRejectionListener>[0]

type CreateNuxtError = (serverError: ServerError) => NuxtError

export const createNuxtErrorFromServerError: CreateNuxtError = (
  serverError
) => {
  const message =
    serverError && 'message' in serverError
      ? serverError.message
      : 'UnhandledRejection'
  return { message }
}
