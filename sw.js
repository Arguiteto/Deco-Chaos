// Precificador Chaos — deixa o app abrir sem internet.
// Ao atualizar o index.html, troque a versão abaixo para o celular baixar a nova.
const CACHE = 'precificador-v2';
const ARQUIVOS = ['./', './index.html', './manifest.webmanifest', './icon-180.png',
  './icon-192.png', './icon-512.png', './icon-512-maskable.png', './favicon-32.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
// Rede primeiro (pega a versão nova); sem rede, usa o que ficou guardado.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(r => {
      if (r.ok && new URL(e.request.url).origin === location.origin) {
        const copia = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copia));
      }
      return r;
    }).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
  );
});
