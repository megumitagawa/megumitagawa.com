export type Milliseconds = number

type Wait = (milliseconds: Milliseconds) => Promise<void>

export const wait: Wait = (milliseconds) =>
  new Promise((resolve) => {
    setTimeout(resolve, milliseconds)
  })
