import { NuxtError } from '@nuxt/types'
import {
  ClientError,
  createNuxtErrorFromClientError,
} from '@/models/ClientError'
import {
  ServerError,
  createNuxtErrorFromServerError,
} from '@/models/ServerError'

type HandleNuxtError = (nuxtError: NuxtError) => void

type CreateHandleClientError = (
  handleNuxtError: HandleNuxtError
) => (clientError: ClientError) => void

export const createHandleClientError: CreateHandleClientError =
  (handleNuxtError) => (clientError) => {
    handleNuxtError(createNuxtErrorFromClientError(clientError))
  }

type CreateHandleServerError = (
  handleNuxtError: HandleNuxtError
) => (serverError: ServerError) => void

export const createHandleServerError: CreateHandleServerError =
  (handleNuxtError) => (serverError) => {
    handleNuxtError(createNuxtErrorFromServerError(serverError))
  }
