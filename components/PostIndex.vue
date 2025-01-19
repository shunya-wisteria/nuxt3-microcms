<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <NuxtLink :to="`/post/${post.id}`">
        <img :src="post.eyecatch?.url" :width="post.eyecatch?.width" :height="post.eyecatch?.height" alt="" />
        <div>
          <div>
            {{ post.title }}
          </div>
          <div>
            {{ post.publishedAt ?? post.createdAt }}
          </div>
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>
<script setup lang="ts">
interface Props {
  posts: any;
}

const { posts } = defineProps<Props>();
</script>