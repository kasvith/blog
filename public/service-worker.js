// The old Gridsome site registered a Workbox service worker at this URL, and returning
// visitors still have it. This replacement clears its caches, unregisters itself and
// reloads open tabs so they get the new site instead of the cached old one.
self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      for (const key of await caches.keys()) await caches.delete(key);
      await self.registration.unregister();
      for (const client of await self.clients.matchAll({ type: "window" })) client.navigate(client.url);
    })(),
  );
});
