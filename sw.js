// เปลี่ยนเลข v1 เป็น v2, v3, v4 ไปเรื่อยๆ ทุกครั้งที่มีการอัปเดต index.html
const CACHE_NAME = 'my-money-cache-v4'; 
const urlsToCache = [
  './index.html'
];

self.addEventListener('install', event => {
  self.skipWaiting(); // บังคับให้อัปเดตทันที
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// ระบบล้างแคช (ความจำ) ตัวเก่าทิ้ง เวลาเลขเวอร์ชันเปลี่ยน
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
