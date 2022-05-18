export interface ErrorLike {
  name: string
  message: string
}

export function isErrorLike(value: any): value is ErrorLike {
  return (
    typeof value === 'object' &&
    typeof value.name === 'string' &&
    typeof value.message === 'string'
  )
}
