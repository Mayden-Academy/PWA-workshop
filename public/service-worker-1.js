var log = console.log.bind(console);//bind our console to a variable
var version = "0.0.6";
var cacheName = "todos";
var cache = cacheName + "-" + version;
var filesToCache = [
    "http://localhost:8888/css/style.css",
    "http://localhost:8888/js/app.js",
    "http://localhost:8888/js/localforage.js",
    "http://localhost:8888/images/icons/favicon.ico",
    "http://localhost:8888/images/icons/icon-144x144.png",
    "http://localhost:8888/manifest.json",
    "http://localhost:8888/",
    "http://localhost:8888/index.php"
];




self.addEventListener("install", function(event) {
    log('[ServiceWorker] Installing....');

    event.waitUntil(caches
        .open(cache)//open this cache from caches and it will return a Promise
        .then(function(swcache) { //catch that promise
            log('[ServiceWorker] Caching files');
            return swcache.addAll(filesToCache);//add all required files to cache it also returns a Promise
        })
    );

});
