// middleware/redirect-root.ts
export default defineNuxtRouteMiddleware((to) => {

  if (to.path === '/') {
    return navigateTo('/getting-started');
  }
});