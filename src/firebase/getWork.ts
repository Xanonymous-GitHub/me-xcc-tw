import {dbType, Work} from "@/firebase/type";

export const getCurrentWorks = async (store: dbType): Promise<Array<Work>> => {
  return (await store.collection('/works').get()).docs.map(work => work.data()) as unknown as Array<Work>
}
