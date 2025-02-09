<template>
  <section class="postframe post">
    <h1 class="textarea">About</h1>

    <div v-html="pageInfo.about" class="textarea"></div>

    <v-breadcrumbs :items="(breadcrumbs)"></v-breadcrumbs>
  </section>
</template>

<script setup lang="ts">
import type { PageInfo } from '~/types/pageinfo';

interface Props {
  pageInfo: PageInfo,
}

const { pageInfo } = defineProps<Props>();


const breadcrumbs: any = [
  {
    title: "Home",
    disabled: false,
    href: "/"
  },
  {
    title: "About",
    disabled: true,
    href: ""
  },
]
</script>