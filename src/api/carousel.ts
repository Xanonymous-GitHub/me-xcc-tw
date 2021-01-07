import axios from 'axios'
import {errorResolver} from "@/api/error";
import {Response} from "@/api/type";

export const getImageUrlList = async (): Response<Array<string>> => {
  const imgListSource = 'https://picsum.photos/v2/list'
  try {
    const {data} = await axios.get(imgListSource)
    return (data as Array<{ download_url: string }>).map(pack => pack.download_url)
  } catch (e) {
    return errorResolver(e)
  }
}
