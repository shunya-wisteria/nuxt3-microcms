<template>
  <PostIndex
    :posts="data?.contents"
  />

  <v-layout column justify="center" align="center">
    <v-container>
      <v-row align="center" justigy="center">
        <v-col cols=12 align="center" style="margin-top:20px;">
          <nuxt-link to="/posts/2" class="more" style="font-size:120%;">Read More Posts</nuxt-link>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const { params } = useRoute();

const page = 1;
const pageLimit = Number(config.public.pageLimit);

const { data } = await useMicroCMSaGetListPerPage(
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