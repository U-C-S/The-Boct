self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('video-store').then(function(cache) {
      return cache.addAll([
        '/The-BOcT/',
        '/The-BOcT/index.html',
        '/The-BOcT/boctscript/index.js',
        '/The-BOcT/boctscript/talk-script.js',
        '/The-BOcT/boctscript/boct.js',
        '/The-BOcT/boctstyle/boct.css',
        '/The-BOcT/boctstyle/boctmediaq.css',
      ]);
    })
  );
 });
 
 self.addEventListener('fetch', function(e) {
   console.log(e.request.url);
   e.respondWith(
     caches.match(e.request).then(function(response) {
       return response || fetch(e.request);
     })
   );
 });