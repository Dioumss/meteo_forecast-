const CACHE = 'meteo-sn-v1';
const FILES = [
  './',
  'index.html',
  'css/styles.css',
  'js/app.js',
  'js/api.js'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
