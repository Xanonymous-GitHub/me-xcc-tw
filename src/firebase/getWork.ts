import {dbType, Work} from "@/firebase/type";

export const getCurrentWorks = async (store: dbType): Promise<Array<Work>> => {
  return (await store.collection('/works').orderBy('createdAt', 'desc').get())
    .docs.map(work =>
      Object.assign({id: work.id}, work.data())
    ) as unknown as Array<Work>
}

// eslint-disable-next-line
export const liveSubscribe = (store: dbType, callback: (() => any)): void => {
  store.collection('/works').onSnapshot(() => {
    callback()
  })
}
