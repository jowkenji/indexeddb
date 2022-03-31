self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('video-store').then(function(cache) {
            return cache.addAll([
                '/indexeddb/',
                '/indexeddb/index.html',
                '/indexeddb/videoindex.css',
                '/indexeddb/videoindex.js'
            ]);
        })
    );
});

self. addEventListener('fetch', e => {
    console.log(e.request.url);
    e.respondWidth(
        caches.match(e.request).then(response => response || fetch(e.request))
    );
});