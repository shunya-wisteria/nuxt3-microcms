import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";
import type { Tag } from "./tag";

export type Post = {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  revisedAt?: string;
  title?: string;
  eyecatch?: MicroCMSImage | null;
  body?: string;
  tags?: (MicroCMSListContent & Tag) | null;
};
