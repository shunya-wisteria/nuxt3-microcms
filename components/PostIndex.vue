<template>
  <v-container>
    <v-row align="center" justify="start">
      <v-col v-for="post in posts" :key="post.id" cols="12">
        <nuxt-link :to="'/post/' + post.id + '/'">
          <v-card>
            <v-container class="cardContainer">
              <v-row>
                <v-col xl="4" lg="4" md="6"  cols="12" sm="12" xs="12">
                  <v-img  v-bind:src="post.eyecatch == null ? '/noimage.webp' : post.eyecatch.url" height="200px" cover />
                </v-col>
                <v-col xl="8" lg="8" md="6"  cols="12" sm="12" xs="12">
                  <v-card-title>{{ post.title }}</v-card-title>
                  <v-card-text>{{ post.abstract }}</v-card-text>
                  <v-card-text>{{ dateFormat(post.publishedAt ? post.publishedAt: "") }}</v-card-text>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </nuxt-link>          
      </v-col>
    </v-row>
  </v-container>

</template>
<script setup lang="ts">
interface Props {
  posts: any;
}

const { posts } = defineProps<Props>();
</script>

<style scoped>
  .cardContainer{
    margin: 0px;
    padding: 0px;
  }
</style>