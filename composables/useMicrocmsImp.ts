import type { Post } from "~~/types/post";
import type { Tag } from "~~/types/tag";
import type { MicroCMSListContent, MicroCMSQueries } from 'microcms-js-sdk';
import type { FetchError } from 'ofetch';

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

  return data.value?.totalCount;
}