export type PageNumber = number

type CreatePreviousPageNumber = (
  pageNumber: PageNumber,
  minPageNumber?: PageNumber
) => PageNumber | undefined

export const createPreviousPageNumber: CreatePreviousPageNumber = (
  pageNumber,
  minPageNumber = 1
) => {
  const maybePreviousPageNumber = pageNumber - 1
  return maybePreviousPageNumber < minPageNumber
    ? undefined
    : maybePreviousPageNumber
}

type CreateNextPageNumber = (
  pageNumber: PageNumber,
  maxPageNumber: PageNumber
) => PageNumber | undefined

export const createNextPageNumber: CreateNextPageNumber = (
  pageNumber,
  maxPageNumber
) => {
  const maybeNextPageNumber = pageNumber + 1
  return maybeNextPageNumber > maxPageNumber ? undefined : maybeNextPageNumber
}
