<template>
  <PostIndex
    :posts="data?.contents"
  />

  <v-pagination v-model="page" :length="totalPage" :total-visible="5" v-on:click="OnPaging" rounded="rounded-lg" color="#7D8692"></v-pagination>
  
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const { params } = useRoute();

const page = ref(Number(Array.isArray(params.page) ? params.page[0] : params.page));
const pageLimit = Number(config.public.pageLimit);

const { data } = await useMicroCMSaGetListPerPage(
  {
    endpoint: "posts",
    filters: "",
    page: page.value,
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

const OnPaging = () => {
  const router = useRouter();
  router.push({
    path : "/posts/" + page.value,
  })
}

</script>