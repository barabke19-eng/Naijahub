   const urlsToCache = [
     '/Naijahub/',
     '/Naijahub/index.html',
     '/Naijahub/manifest.json',
     '/Naijahub/icon-192.png',
     '/Naijahub/icon-512.png'
   ]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  caches.match('/Naijahub/')
caches.match(event.request)
.then(response => response || fetch(event.request)
});
