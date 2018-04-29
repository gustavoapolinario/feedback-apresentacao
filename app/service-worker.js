
var CACHE_NAME = 'v1.1';
var urlsToCache = [
	'./',
	'css/materialize.min.css',
	'css/mystyle.css',
	'service-worker-register.js',
	'polymer-components/presentation-list.html',
	'bower_components/polymer/polymer.html',
	'js/materialize.min.js',
	'bower_components/webcomponentsjs/webcomponents-loader.js',
	'img/ranieri.png',
	'bower_components/polymer/polymer-element.html',
	'polymer-components/presentation-list-item.html',
	'js/presentation-list.js',
	'bower_components/polymer/lib/mixins/element-mixin.html',
	'bower_components/polymer/lib/utils/html-tag.html',
	'bower_components/paper-card/paper-card.html',
	'bower_components/paper-styles/paper-styles.html',
	'bower_components/iron-icons/iron-icons.html',
	'js/presentation-vote.js',
	'bower_components/polymer/lib/utils/boot.html',
	'bower_components/polymer/lib/utils/settings.html',
	'bower_components/polymer/lib/utils/mixin.html',
	'bower_components/polymer/lib/utils/style-gather.html',
	'bower_components/polymer/lib/utils/resolve-url.html',
	'bower_components/polymer/lib/elements/dom-module.html',
	'bower_components/polymer/lib/mixins/property-effects.html',
	'bower_components/polymer/lib/mixins/properties-mixin.html',
	'bower_components/polymer/polymer.html',
	'bower_components/iron-flex-layout/iron-flex-layout.html',
	'bower_components/iron-image/iron-image.html',
	'bower_components/paper-styles/element-styles/paper-material-styles.html',
	'bower_components/paper-styles/default-theme.html',
	'bower_components/paper-styles/color.html',
	'bower_components/paper-styles/shadow.html',
	'bower_components/paper-styles/typography.html',
	'bower_components/iron-icon/iron-icon.html',
	'bower_components/iron-iconset-svg/iron-iconset-svg.html',
	'bower_components/polymer/lib/utils/path.html',
	'bower_components/polymer/lib/utils/case-map.html',
	'bower_components/polymer/lib/mixins/property-accessors.html',
	'bower_components/polymer/lib/mixins/template-stamp.html',
	'bower_components/polymer/lib/mixins/properties-changed.html',
	'bower_components/polymer/lib/legacy/legacy-element-mixin.html',
	'bower_components/polymer/lib/legacy/polymer-fn.html',
	'bower_components/polymer/lib/legacy/templatizer-behavior.html',
	'bower_components/polymer/lib/elements/dom-bind.html',
	'bower_components/polymer/lib/elements/dom-repeat.html',
	'bower_components/polymer/lib/elements/dom-if.html',
	'bower_components/polymer/lib/elements/array-selector.html',
	'bower_components/polymer/lib/elements/custom-style.html',
	'bower_components/polymer/lib/legacy/mutable-data-behavior.html',
	'bower_components/font-roboto/roboto.html',
	'bower_components/iron-meta/iron-meta.html',
	'bower_components/polymer/lib/utils/async.html',
	'bower_components/shadycss/apply-shim.html',
	'bower_components/polymer/lib/mixins/gesture-event-listeners.html',
	'bower_components/polymer/lib/mixins/dir-mixin.html',
	'bower_components/polymer/lib/utils/import-href.html',
	'bower_components/polymer/lib/utils/render-status.html',
	'bower_components/polymer/lib/utils/unresolved.html',
	'bower_components/polymer/lib/legacy/polymer.dom.html',
	'bower_components/polymer/lib/legacy/class.html',
	'bower_components/polymer/lib/utils/templatize.html',
	'bower_components/polymer/lib/mixins/mutable-data.html',
	'bower_components/polymer/lib/utils/debounce.html',
	'bower_components/polymer/lib/utils/flush.html',
	'bower_components/polymer/lib/utils/array-splice.html',
	'bower_components/shadycss/custom-style-interface.html',
	'bower_components/shadycss/apply-shim.min.js',
	'bower_components/polymer/lib/utils/gestures.html',
	'bower_components/polymer/lib/utils/flattened-nodes-observer.html',
	'bower_components/shadycss/custom-style-interface.min.js',
	'js/login.js',
	'json/apresentacoes.html',
	'https://fonts.googleapis.com/icon?family=Material+Icons',
	'https://code.jquery.com/jquery-3.2.1.min.js',
	'https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2',
	'https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
	'https://fonts.gstatic.com/s/materialicons/v36/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2',
	'https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fBBc4AMP6lQ.woff2',
	'https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic'
	
];

self.addEventListener('install', function(event) {
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
		caches.keys()
		.then(cacheNames => cacheNames.filter(cacheName => !currentCaches.includes(cacheName)))
		.then(cachesToDelete => Promise.all(cachesToDelete.map(cacheToDelete => caches.delete(cacheToDelete) )) )
		.then(() => self.clients.claim())
	);
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request)
			.then(response => {
				//console.log(event.request.url)
				return response ? response : fetch(event.request);
			}
		)
	);
});
