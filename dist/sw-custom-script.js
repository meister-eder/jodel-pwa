// if (!('fetch' in window)) {
//   console.log('Fetch API not found, try including the polyfill');
// }
console.log('custom service worker script here');
//testing user agent detection
//  && /Android/i.test(navigator.userAgent)
self.addEventListener('fetch', event => {
  let userAgent = navigator.userAgent;
  console.log(userAgent);
  if (event.request.url.endsWith('/style_ios.css') ) {
    console.log('found ios style');
    event.respondWith(
      fetch('https://fehler40.uber.space/static/css/style_android.css')
    );
  }
});
