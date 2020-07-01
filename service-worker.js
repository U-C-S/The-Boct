self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('The-BOcT').then(function(cache) {
      return cache.addAll([
        '/The-BOcT/',
        '/The-BOcT/index.html',
        '/The-BOcT/boctstyle/boct.css',
        '/The-BOcT/boctstyle/boctmediaq.css',
        '/The-BOcT/boctscript/index.js',
        '/The-BOcT/boctscript/talk-script.js',
        '/The-BOcT/boctscript/boct.js'
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