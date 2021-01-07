import axios from 'axios'
import {errorResolver} from "@/api/error";
import {Response, UploadedMedia} from "@/api/type";

const npcServicesApiUrl = 'https://asia-northeast1-npc-services.cloudfunctions.net'

export const uploadMedia = async (file: File, preferredType?: string): Response<UploadedMedia> => {
  const formData = new FormData();
  formData.append("file", file)
  preferredType && formData.append("type", preferredType)
  try {
    const {data} = await axios.post(npcServicesApiUrl + '/Image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    return data
  } catch (e) {
    return errorResolver(e)
  }
}

