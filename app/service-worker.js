var CACHE_NAME = 'v1';
var urlsToCache = [
	'./',
	'css/materialize.min.css',
	'css/mystyle.css',
	'js/materialize.min.js'
];

self.addEventListener('install', function(event) {
	// Perform install steps
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(cache => cache.addAll(urlsToCache))
		.then(self.skipWaiting())
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
