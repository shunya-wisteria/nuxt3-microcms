import type { Post } from "~~/types/post";
import type { Tag } from "~~/types/tag";

type MicroCMSaGetListPerPageArgs = {
  endpoint: string;
  filters: string;
  page: number;
  pageLimit: number;
}
type MicroCMSaGetPostCountArgs = {
  endpoint: string;
  filters: string;
}

export async function useMicroCMSaGetListPerPage({endpoint, filters, page, pageLimit}:MicroCMSaGetListPerPageArgs){
  const offset:number = pageLimit * (page - 1);
  return await useMicroCMSGetList<Post>({
        endpoint: endpoint,
        queries:{limit:pageLimit, offset:offset, filters:filters}
      },{key:filters + "-" + page});
}

export async function useMicroCMSaGetPostCount({endpoint, filters}:MicroCMSaGetPostCountArgs){
  const { data } = await useMicroCMSGetList<Post>({
    endpoint: endpoint,
    queries:{fields:"totalCount", filters:filters}
  },{key:filters + "-count"});

  return data.value?.totalCount ? data.value.totalCount : 0;
}

export async function useMicroCMSaGetTags() {
  return await useMicroCMSGetList<Tag>({
    endpoint: "tags",
    queries: {limit:100}
  },{key:"tags"});
}

export async function useMicroCMSaGetTag(tagId:string) {
  return await useMicroCMSGetListDetail<Tag>({
    endpoint: "tags",
    contentId: tagId
  }, {key:"tags_" + tagId})
}