<template>
  <h1>Nuxt3 Jamstack Blogs</h1>
  <PostIndex
    :posts="data?.contents"
  />

  <template v-for="n in totalPage" :key="n">
    <NuxtLink :to="`/posts/${n}`" style="margin:20px">
      {{ n }}
    </NuxtLink>
  </template>
</template>

<script setup lang="ts">
import { Blog } from "~~/types/Blog";
import { Post } from "~~/types/Post"

const config = useRuntimeConfig();
const { params } = useRoute();

const page = Array.isArray(params.page) ? params.page[0] : params.page;
const pageLimit = config.public.pageLimit;

const { data } = await useMicroCMSaGetListPerPage<Post>(
  {
    endpoint: "posts",
    filters: "",
    page: page,
    pageLimit: pageLimit
  }
);

const totalCount = await useMicroCMSaGetPostCount(
  {
    endpoint: "posts",
    filters: ""
  }
);

const totalPage = ref(Math.ceil(totalCount / pageLimit));

</script>