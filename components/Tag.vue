<template>
  <section class="postframe post">
    <h1 class="textarea">Tags</h1>

    <v-layout
      column
    >
      <v-container>
        <v-row>
          <v-col
             cols="12" 
             align="center"
          >
          <v-chip
            v-for="(t,index) in tag"
            :key="index"
            v-bind:to="'/tags/' + t.id + '/'"
            label
          >
            <v-avatar left>
              <v-icon light>mdi-tag-outline</v-icon>
            </v-avatar>
            {{t.name}}
          </v-chip>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>

    <v-breadcrumbs :items="(breadcrumbs)"></v-breadcrumbs>

  </section>
</template>

<script setup lang="ts">
import type { Tag } from '~/types/tag';

interface Props{
  tag:Tag[]
}

const { tag } = defineProps<Props>();

const breadcrumbs: any = [
  {
    title: "Home",
    disabled: false,
    href: "/"
  },
  {
    title: "Tags",
    disabled: true,
    href: ""
  },
]
</script>