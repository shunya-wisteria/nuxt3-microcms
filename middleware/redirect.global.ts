export default defineNuxtRouteMiddleware((to) => {
  if (to.path === "/posts" || to.path === "/posts/") {
    const config = useRuntimeConfig();
    return navigateTo("/posts/1", { redirectCode: 301, external:false } );
  }
});