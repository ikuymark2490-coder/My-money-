// ⚡️ อัปเดตเลขเวอร์ชันเป็น v5 เพื่อล้างท่อใหม่ทั้งหมด
const CACHE_NAME = 'my-money-cache-v9'; 
const urlsToCache = [
  './',
  './index.html',
  './logo.png',
  './logo_app.png'
];

self.addEventListener('install', event => {
  // ⚡️ บังคับให้ข้ามขั้นตอนรอ (Waiting) และติดตั้งทันที
  self.skipWaiting(); 
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', event => {
  // ⚡️ บังคับให้ Service Worker ตัวใหม่ควบคุมหน้าเว็บทุกหน้าทันที
  event.waitUntil(clients.claim()); 
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
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
      .then(response => {
        // ถ้าเจอในแคชให้ใช้แคช ถ้าไม่เจอค่อยไปโหลดจากเน็ต
        return response || fetch(event.request);
      })
  );
});
