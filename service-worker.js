var cacheName = "boct-3.2.1b";
var files = [
  "/",
  "/index.html",
  "/dist/styles/boct.css",
  "/dist/styles/boctmediaq.css",
  "/dist/domElements.js",
  "/dist/index.js",
  "/dist/settings.js",
  "/dist/talk-script.js",
  "/dist/unit-convert.js",
  "/assets/robot.ico",
  "https://fonts.gstatic.com/s/quicksand/v21/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkP8o58a-wg.woff2",
  "https://fonts.gstatic.com/s/megrim/v11/46kulbz5WjvLqJZVam_h.woff2",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(files);
    })
  );
});

//Network falling back to the cache
//Src-- https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker#network_falling_back_to_the_cache
self.addEventListener("fetch", (e) => {
  e.respondWith(
    fetch(e.request).catch(() => {
      return caches.match(e.request);
    })
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});
