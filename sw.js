const CACHE_NAME = 'random-picker-v1';
const urlsToCache = [
    '.',
    'index.html',
    'manifest.json',
    'icon.png'
];

// 安装：缓存所有文件
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

// 请求：优先从缓存读取
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});