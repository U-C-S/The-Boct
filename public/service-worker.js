var CACHEname = "boct-3.4.0";
var RUNTIME = "runtime";
var FILES = [
  "/",
  "/index.html",
  "/styles/boct.css",
  "/styles/boctmediaq.css",
  "/assets/robot.ico",
  "/scripts/domElements.js",
  "/scripts/index.js",
  "/scripts/settings.js",
  "/scripts/talk-script.js",
  "/scripts/unit-convert.js",
  "https://fonts.gstatic.com/s/quicksand/v21/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkP8o58a-wg.woff2",
  "https://fonts.gstatic.com/s/megrim/v11/46kulbz5WjvLqJZVam_h.woff2",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(CACHEname)
      .then((cache) => cache.addAll(FILES))
      .then(self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  const currentCaches = [CACHEname, RUNTIME];
  e.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return cacheNames.filter((cacheName) => !currentCaches.includes(cacheName));
      })
      .then((cachesToDelete) => {
        return Promise.all(
          cachesToDelete.map((cacheToDelete) => {
            return caches.delete(cacheToDelete);
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  if (e.request.url.startsWith(self.location.origin)) {
    e.respondWith(
      caches.match(e.request).then((cachedResponse) => {
        if (cachedResponse) return cachedResponse;
        return caches.open(RUNTIME).then((cache) => {
          return fetch(e.request).then((response) => {
            return cache.put(e.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});

//src: https://github.com/GoogleChrome/samples/tree/gh-pages/service-worker/basic
