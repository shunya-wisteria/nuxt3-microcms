<template>
  <section class="postframe post">
    <h1 class="textarea">About</h1>

    <v-breadcrumbs :items="(breadcrumbs)"></v-breadcrumbs>
  </section>
</template>

<script setup lang="ts">
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