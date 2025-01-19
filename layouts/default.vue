<template>
  <v-app id="inspire" class="bg-background text-main_text">

    <v-app-bar>
      <span class="headline">
        <nuxt-link to="/" style="color:inherit;border-bottom:none;">
          Nuxt3 Jamstack Blogs
        </nuxt-link>
      </span>

    </v-app-bar>

    <v-main>
      <NuxtPage />
    </v-main>

    <v-footer :absolute="true" height="120px">
      <v-col class="text-center" cols="12">
        &copy; {{ new Date().getFullYear() }}
      </v-col>
    </v-footer>


  </v-app>
</template>

<style scoped>
.headline{
  color: rgb(var(--v-theme-page_title));
  font-family: Roboto,sans-serif!important;
  font-size: 1.5rem!important;
  font-weight: 400;
  letter-spacing: normal!important;
}
</style>