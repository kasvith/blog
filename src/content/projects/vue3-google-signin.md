---
repo: wavezync/vue3-google-signin
lang: TypeScript
stars: 187
site: https://vue3-google-signin.wavezync.com
description: Google OAuth2 plugin for Vue 3 apps, built on the Google Identity Services library.
order: 2
---

Google sign-in for Vue 3 apps, built on Google Identity Services. It ships a plugin, a sign-in component and composables for different authentication flows. A companion module, nuxt-vue3-google-signin, covers Nuxt 3 and 4.

## Highlights

- Install with npm, Yarn or pnpm and register one plugin
- Composables for different authentication strategies
- Nuxt module with SSR, sessions, protected pages and server routes
- Full guides at vue3-google-signin.wavezync.com

## Quick look

```ts
import GoogleSignInPlugin from "vue3-google-signin";

app.use(GoogleSignInPlugin, {
  clientId: "CLIENT ID OBTAINED FROM GOOGLE API CONSOLE",
});

app.mount("#app");
```
