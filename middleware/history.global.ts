export default defineNuxtRouteMiddleware((to, form) => {
  const navigationHistory = useLocalStorage("history", []);
  navigationHistory.value.push(to.path);
});
