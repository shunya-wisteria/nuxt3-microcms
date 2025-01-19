<template>
  <template v-if="data?.contents">
    <Tag :tag="data.contents"></Tag>
  </template>
</template>

<script setup lang="ts">
const { data } = await useMicroCMSaGetTags();

useHead({
  title:"Tags"
})
</script>