import { Context } from '@nuxt/types'

type ContextError = Context['error']

/**
 * All errors are aggregated and handled here
 */
type CreateHandleError = (contextError: ContextError) => () => void

export const createHandleError: CreateHandleError = (contextError) => () => {
  // Todo: Recieve error object in returned function and handle it
  contextError({ message: 'Error' })
}
