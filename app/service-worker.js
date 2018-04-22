var CACHE_NAME = 'v1';
var urlsToCache = [
	'./',
	'css/materialize.min.css',
	'css/mystyle.css',
	'js/materialize.min.js',
	'favicon.ico',
	'https://code.jquery.com/jquery-3.2.1.min.js',
	'manifest.json',
	'fonts/roboto/Roboto-Medium.woff2',
	'fonts/roboto/Roboto-Regular.woff2',
	'fonts/roboto/Roboto-Light.woff2',
	'fonts/roboto/Roboto-Regular.woff',
	'fonts/roboto/Roboto-Light.woff',
];

self.addEventListener('install', function(event) {
	// Perform install steps
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(cache => cache.addAll(urlsToCache))
		.then(self.skipWaiting())
	);
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
	const currentCaches = [urlsToCache, 'runtime'];
	event.waitUntil(
		caches.keys().then(cacheNames => {
			return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
		}).then(cachesToDelete => {
			return Promise.all(cachesToDelete.map(cacheToDelete => {
				return caches.delete(cacheToDelete);
			}));
		}).then(() => self.clients.claim())
	);
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request)
			.then(function(response) {
				if (response) {
					return response;
				}
				return fetch(event.request);
			}
		)
	);
});
