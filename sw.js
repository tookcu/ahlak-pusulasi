/*
 * Dijital Ahlak Pusulası — çevrimdışı önbellek (servis çalışanı)
 *
 * Strateji: önce ağ. İnternet varsa her zaman en güncel sürüm gelir ve önbelleğe yazılır;
 * bağlantı yoksa ya da 4 saniyede yanıt gelmezse önbellekteki son sürüm açılır.
 * Böylece kiosk sayfayı bir kez internetle açtıktan sonra fuar Wi-Fi'ı kesilse de çalışır.
 *
 * Önbellek yapısı değişirse CACHE adını artırın (dap-v2 …); eski önbellek otomatik silinir.
 */
const CACHE = 'dap-v1';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon.svg'];
const NETWORK_TIMEOUT_MS = 4000;

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE)
            .then(cache => cache.addAll(ASSETS))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    const request = event.request;
    if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
    event.respondWith(networkFirst(request));
});

async function networkFirst(request) {
    const cache = await caches.open(CACHE);
    try {
        const response = await Promise.race([
            fetch(request),
            new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), NETWORK_TIMEOUT_MS))
        ]);
        if (response && response.ok) cache.put(request, response.clone());
        return response;
    } catch (err) {
        const cached = await cache.match(request, { ignoreSearch: true });
        if (cached) return cached;
        // Sayfa gezintilerinde (ör. sertifika bağlantısı) uygulamanın kendisini döndür
        if (request.mode === 'navigate') {
            const shell = (await cache.match('./index.html')) || (await cache.match('./'));
            if (shell) return shell;
        }
        throw err;
    }
}
