<template>
  <h1>{{ tagName }}</h1>
  <PostIndex
    :posts="data?.contents"
  />

  <v-pagination v-model="page" :length="totalPage" :total-visible="5" v-on:click="OnPaging" rounded="rounded-lg" color="#7D8692"></v-pagination>
  
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const { params } = useRoute();

const tag = ref(params.id);

const page = ref(1);
const pageLimit = Number(config.public.pageLimit);

const { data } = await useMicroCMSaGetListPerPage(
  {
    endpoint: "posts",
    filters: "tags[contains]" + tag.value,
    page: page.value,
    pageLimit: pageLimit
  }
);

const totalCount = await useMicroCMSaGetPostCount(
  {
    endpoint: "posts",
    filters: "tags[contains]" + tag.value,
  }
);

const totalPage = ref(Math.ceil(totalCount / pageLimit));

const tagName = ref((await useMicroCMSaGetTag(tag.value as string)).data.value.name);

const OnPaging = () => {
  const router = useRouter();
  router.push({
    path : "/tags/" + tag.value + "/" + page.value
  })
}

useHead({
  title:"Tag : " + tagName.value
})

</script>