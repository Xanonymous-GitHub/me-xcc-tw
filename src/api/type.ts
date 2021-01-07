export interface ResponseError {
  readonly statusCode?: number,
  readonly message?: string
}

export type Response<T> = Promise<T | ResponseError>

export interface UploadedMedia {
  url: string
}
