export type PageNumber = number

export const isPageNumber = (value: unknown): value is PageNumber =>
  typeof value === 'number' && Number.isInteger(value) && value > 0

type CreatePreviousPageNumber = (
  pageNumber: PageNumber,
  minPageNumber?: PageNumber
) => PageNumber | null

export const createPreviousPageNumber: CreatePreviousPageNumber = (
  pageNumber,
  minPageNumber = 1
) => {
  const maybePreviousPageNumber = pageNumber - 1
  return maybePreviousPageNumber < minPageNumber
    ? null
    : maybePreviousPageNumber
}

type CreateNextPageNumber = (
  pageNumber: PageNumber,
  maxPageNumber: PageNumber
) => PageNumber | null

export const createNextPageNumber: CreateNextPageNumber = (
  pageNumber,
  maxPageNumber
) => {
  const maybeNextPageNumber = pageNumber + 1
  return maybeNextPageNumber > maxPageNumber ? null : maybeNextPageNumber
}
