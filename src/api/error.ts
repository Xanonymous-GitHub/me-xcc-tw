import {ResponseError} from "@/api/type";

// eslint-disable-next-line
export const errorResolver = (e: any): ResponseError => {
  if (e && e.response && e.response.data) {
    return e.response.data
  } else {
    return {
      statusCode: e.status || 502,
      message: 'Unknown Error!'
    }
  }
}
