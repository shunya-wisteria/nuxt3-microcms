<template>
  <About :pageInfo="(pageInfo as PageInfo)"/>
</template>

<script setup lang="ts">
import type { PageInfo } from '~/types/pageinfo';

const pageInfo = useState('PageInfo').value as PageInfo;

useHead({
  title:"About"
})
</script>