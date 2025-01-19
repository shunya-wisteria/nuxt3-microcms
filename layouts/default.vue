<template>
  <v-app id="inspire" class="bg-background text-main_text">

    <v-navigation-drawer temporary v-model="drawer">
      <v-list>
        <v-list-item v-for="(item, i) in menuItem" :key="i" :to="item.to">
          <template v-slot:prepend>
            <v-icon :icon="item.icon" style="color:rgb(var(--v-theme-menu_text));" />
          </template>
          <v-list-item-title v-text="item.title" style="color:rgb(var(--v-theme-menu_text));"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <span class="headline">
        <nuxt-link to="/" style="color:inherit;border-bottom:none;">
          {{ pageInfo.title }}
        </nuxt-link>
      </span>

    </v-app-bar>

    <v-main>
      <NuxtPage />
    </v-main>

    <v-footer :absolute="true" height="120px">
      <v-col class="text-center" cols="12">
        &copy; {{ new Date().getFullYear() }} {{ pageInfo.author }}
      </v-col>
    </v-footer>


  </v-app>
</template>

<script setup lang="ts">
import type { PageInfo } from '~/types/pageinfo';

const { data } = await useMicroCMSGetObject({ endpoint: "pageinfo" });
const pageInfo = useState<PageInfo>('PageInfo', () => {
  return data.value as PageInfo
})

// Navigation Menu settings
const drawer = ref(false);
const menuItem = ref(
  [
    {
      icon: 'mdi-home-outline',
      title: 'Home',
      to: '/'
    },
    {
      icon: 'mdi-account-details-outline',
      title: 'About',
      to: '/about'
    },
    {
      icon: 'mdi-tag-outline',
      title: 'Tags',
      to: '/tags'
    }
  ]
)


</script>

<style scoped>
.headline {
  color: rgb(var(--v-theme-page_title));
  font-family: Roboto, sans-serif !important;
  font-size: 1.5rem !important;
  font-weight: 400;
  letter-spacing: normal !important;
}
</style>