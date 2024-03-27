// Cache HTML pages with StaleWhileRevalidate strategy
self.addEventListener('fetch', event => {
    if (event.request.mode === 'navigate') {
      event.respondWith(
        caches.match(event.request).then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
  
          return fetch(event.request).then(response => {
            return caches.open('page-cache').then(cache => {
              cache.put(event.request, response.clone());
              return response;
            });
          });
        })
      );
    }
  });
  
  // Implement asset caching for CSS, JS, and Worker files with StaleWhileRevalidate strategy
  self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);
    
    if (['style', 'script', 'worker'].includes(request.destination)) {
      event.respondWith(
        caches.match(request).then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
  
          return fetch(request).then(response => {
            return caches.open('asset-cache').then(cache => {
              cache.put(request, response.clone());
              return response;
            });
          });
        })
      );
    }
  });
  
  // Register route to cache images with StaleWhileRevalidate strategy
  self.addEventListener('fetch', event => {
    if (event.request.destination === 'image' && event.request.url.includes('res.cloudinary.com')) {
      event.respondWith(
        caches.match(event.request).then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
  
          return fetch(event.request).then(response => {
            return caches.open('images-cache').then(cache => {
              cache.put(event.request, response.clone());
              return response;
            });
          });
        })
      );
    }
  });


// This script depends on workbox which may not jive with Vite. So I removed the dependency on workbox and just used a statndard 'addEventListener' approach to handle fetch events and cache assets. The logic remains the same for caching HTML pages, CSS JS, worker files and images but is not Workbox dependent. The idea is to include this script for a custom service worker and bundle it in my Vite application.    

// This service worker script implements caching strategies for various assets to ensure a reliable and fast UX, even offline.

// const { StaleWhileRevalidate } = require('workbox-strategies');
// const { registerRoute } = require('workbox-routing');
// const { CacheableResponsePlugin } = require('workbox-cacheable-response');
// const { ExpirationPlugin } = require('workbox-expiration');
// const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

// precacheAndRoute(self.__WB_MANIFEST);

// // Cache HTML pages with StaleWhileRevalidate strategy.   
// const pageCache = new StaleWhileRevalidate({
//   cacheName: 'page-cache',
//   plugins: [
//     new CacheableResponsePlugin({
//       statuses: [0, 200],
//     }),
//     new ExpirationPlugin({
//       maxAgeSeconds: 30 * 24 * 60 * 60, // Cache HTML pages for 30 days
//     }),
//   ],
// });

// registerRoute(
//   ({ request }) => 
//   request.mode === 'navigate', 
//   pageCache
// );

// // Implement asset caching for CSS, JS and Worker files with StaleWhileRevalidate strategy
// registerRoute(
//   ({ request }) =>
//     ['style', 'script', 'worker'].includes(request.destination),
//   new StaleWhileRevalidate({
//     cacheName: 'asset-cache',
//     plugins: [
//       new CacheableResponsePlugin({
//         statuses: [0, 200],
//       }),
//       new ExpirationPlugin({
//         maxAgeSeconds: 7 * 24 * 60 * 60, //By multiplying 7 days by 24 hours in a day by 60 minutes in an hour by 60 seconds in a minute, we get the number of seconds in 7 days. This property in the ExpirationPlugin specifies how long an item will remain in the cache before it is replaced with a fresh version from the network. 
//       }),
//     ],
//   })
// );

// // Register route to cache images with StaleWhileRevalidate strategy
// registerRoute(
//   ({ request }) =>
//     request.destination === 'image' && request.url.includes('res.cloudinary.com'),
//   new StaleWhileRevalidate({
//     cacheName: 'images-cache',
//     plugins: [
//       new CacheableResponsePlugin({
//         statuses: [0, 200],
//       }),
//       new ExpirationPlugin({
//         maxAgeSeconds: 7 * 24 * 60 * 60, //Cached version will be considered fresh for 7 days
//       }),
//     ],
//   })
// );
  