import { NuxtError } from '@nuxt/types'
import {
  ClientError,
  createNuxtErrorFromClientError,
} from '~/models/ClientError'
import {
  ServerError,
  createNuxtErrorFromServerError,
} from '~/models/ServerError'

type HandleNuxtError = (nuxtError: NuxtError) => void

type CreateHandleClientError = (
  handleNuxtError: HandleNuxtError,
  showingDetails: boolean
) => (clientError: ClientError) => void

export const createHandleClientError: CreateHandleClientError =
  (handleNuxtError, showingDetails) => (clientError) => {
    handleNuxtError(createNuxtErrorFromClientError(clientError, showingDetails))
  }

type CreateHandleServerError = (
  handleNuxtError: HandleNuxtError,
  showingDetails: boolean
) => (serverError: ServerError) => void

export const createHandleServerError: CreateHandleServerError =
  (handleNuxtError, showingDetails) => (serverError) => {
    handleNuxtError(createNuxtErrorFromServerError(serverError, showingDetails))
  }
