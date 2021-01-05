import axios from 'axios'
import {Response, UploadedMedia, ResponseError} from "@/firebase/type";

const npcServicesApiUrl = 'https://asia-northeast1-npc-services.cloudfunctions.net'

// eslint-disable-next-line
const errorResolver = (e: any): ResponseError => {
  if (e && e.response && e.response.data) {
    return e.response.data
  } else {
    return {
      statusCode: e.status || 502,
      message: 'Unknown Error!'
    }
  }
}

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

export const toBase64 = (file: File): Promise<unknown> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

export const replaceDefaultPicture = (picture: string | undefined, container: HTMLElement): void => {
  if (picture && picture !== '') {
    const pictureContainer = container.querySelector('.picture') as HTMLDivElement
    const defaultPicture = pictureContainer.childNodes[0] as HTMLElement
    pictureContainer.removeChild(defaultPicture)
    const realPicture = document.createElement("img") as HTMLImageElement
    realPicture.setAttribute("style", `
      width: auto;
      max-width: 100%;
      max-height: 200px;
      position: relative;
      margin: 0 auto;
      left: 50%;
      transform: translateX(-50%);
    `)
    realPicture.setAttribute("src", picture)
    realPicture.setAttribute("alt", "")
    pictureContainer.appendChild(realPicture)
  }
}
