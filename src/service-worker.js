importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(

   caches.open('jodel_pwa').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/index.html?homescreen=1',
       '/?homescreen=1',
       '/',
       '/scripts/main.min.js',

     ]);
   })
 );
});


self.addEventListener('fetch', event => {
  let userAgent = navigator.userAgent;
  console.log(userAgent);
  if (event.request.url.endsWith('/bar.css')) {
    event.respondWith(
      fetch('https://static.example.com/bar/style.css')
    );
  }
});
