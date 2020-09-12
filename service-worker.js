self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('The-BOcT').then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/boctstyle/boct.css',
        '/boctstyle/boctmediaq.css',
        '/boct_Scripts/index.js',
        '/boct_Scripts/talk-script.js',
        '/boct_Scripts/settings.js',
        '/boct_Scripts/unit-convert.js',
        '/boct_Scripts/PWA.js'
      ]);
    })
  );
 });
//Network falling back to the cache
//https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker#network_falling_back_to_the_cache
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          // Return true if you want to remove this cache,
          // but remember that caches are shared across
          // the whole origin
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});