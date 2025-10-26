# Module 8 — Browser APIs & Advanced Web Features

## 8.1 Fetch API vs XHR — Requests, Response Types, Streaming

- Concepts Covered:
    - What is Fetch API
    - Difference between Fetch and XMLHttpRequest (XHR)
    - Handling text, JSON, and blob responses
    - Streaming large responses
    - Handling errors and network failures
    - Aborting requests using AbortController
  
Example:
```
// Fetch API example
fetch('https://api.example.com/users')
  .then(res => {
    if (!res.ok) throw new Error('Network error');
    return res.json();
  })
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Aborting fetch
const controller = new AbortController();
fetch('/api/data', { signal: controller.signal });
controller.abort();

```
Key Difference:

| Feature    | Fetch API         | XMLHttpRequest |
| ---------- | ----------------- | -------------- |
| Syntax     | Promise-based     | Callback-based |
| Streaming  | Supported         | Not supported  |
| Aborting   | `AbortController` | `xhr.abort()`  |
| Simplicity | Cleaner, modern   | Verbose        |

---
## 8.2 localStorage, sessionStorage, IndexedDB (Basic)
Browsers provide several storage options for data persistence.

🔹 Storage Comparison
| Feature   | localStorage | sessionStorage   | IndexedDB            |
| --------- | ------------ | ---------------- | -------------------- |
| Lifespan  | Persistent   | Until tab closes | Persistent           |
| Capacity  | ~5–10 MB     | ~5 MB            | Hundreds of MB       |
| Data Type | String only  | String only      | Structured (Objects) |
| Async?    | No           | No               | Yes (event-based)    |

🗂️ Example — localStorage
```
localStorage.setItem('theme', 'dark');
console.log(localStorage.getItem('theme')); // "dark"
localStorage.removeItem('theme');
```

🕒 Example — sessionStorage
```
sessionStorage.setItem('token', 'abc123');
sessionStorage.clear(); // remove all session data

```

💾 IndexedDB (Structured Storage)

IndexedDB is a mini database inside your browser for storing complex data (objects, arrays, blobs).
```
const request = indexedDB.open('MyDB', 1);

request.onupgradeneeded = event => {
  const db = event.target.result;
  db.createObjectStore('users', { keyPath: 'id' });
};

request.onsuccess = event => {
  const db = event.target.result;
  const tx = db.transaction('users', 'readwrite');
  tx.objectStore('users').add({ id: 1, name: 'John' });
};

```
> Use Case: Caching API responses, offline apps, big data storage.

---

## 8.3 Service Workers & Offline-First Apps

A Service Worker (SW) is a script that runs in the background (separate from the web page).
It intercepts network requests and can serve cached files, enabling offline experiences.

- Lifecycle
  - Register
  - Install
  - Activate
  - Intercept Fetch Events

Example:
```
// Register the service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(() => console.log('Service Worker Registered'));
}

```
Inside sw.js:
```
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => cache.addAll([
      '/',
      '/index.html',
      '/styles.css',
      '/app.js'
    ]))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

```
Cache Strategies:
| Strategy                   | Description                              |
| -------------------------- | ---------------------------------------- |
| **Cache First**            | Always serve cached version if available |
| **Network First**          | Try network, fallback to cache           |
| **Stale-While-Revalidate** | Serve cache, update in background        |

> Use Case: PWAs, offline blogs, caching API responses.

--- 

## 8.4 WebSockets & Real-Time Communication

- What is WebSocket?
A WebSocket connection allows real-time, full-duplex communication between browser and server.
```
HTTP (Request → Response)
WebSocket (Both directions continuously)

```
Example:
```
const socket = new WebSocket('wss://echo.websocket.org');

socket.onopen = () => socket.send('Hello!');
socket.onmessage = e => console.log('Server:', e.data);
socket.onclose = () => console.log('Closed');

```
- Use Cases:
  - Chat applications
  - Live notifications
  - Real-time dashboards
  - Multiplayer games

---

## 8.5 Geolocation, Notifications, Clipboard APIs

- Geolocation API

Used to get user’s latitude and longitude.
```
navigator.geolocation.getCurrentPosition(
  pos => console.log(pos.coords.latitude, pos.coords.longitude),
  err => console.error(err)
);

```
> Permission required.

- Notifications API
Used to send native desktop notifications.
```
Notification.requestPermission().then(permission => {
  if (permission === 'granted') {
    new Notification('Welcome back!', { body: 'You have new updates.' });
  }
});

```

- Clipboard API

Used to copy and paste text programmatically.
```
navigator.clipboard.writeText('Copied content!');
navigator.clipboard.readText().then(text => console.log(text));

```

8.6 History API & SPA Navigation

- Purpose
Lets you manipulate browser history without reloading.
Essential for Single Page Applications (SPA).

Example:
```
// Push a new history entry
history.pushState({ page: 'about' }, 'About', '/about');

// Replace current history entry
history.replaceState({ page: 'home' }, 'Home', '/');

// Handle back/forward buttons
window.onpopstate = event => {
  console.log('User navigated:', document.location.pathname);
};

```
> Used in: React Router, Angular Router, Vue Router.

## 8.7 Performance APIs (Navigation Timing, Resource Timing)

These APIs measure page performance metrics.

- Example: Navigation Timing
```
const [timing] = performance.getEntriesByType('navigation');
console.table({
  'Redirect Time': timing.redirectEnd - timing.redirectStart,
  'DNS Lookup': timing.domainLookupEnd - timing.domainLookupStart,
  'TCP Connect': timing.connectEnd - timing.connectStart,
  'DOM Loaded': timing.domContentLoadedEventEnd,
  'Load Event': timing.loadEventEnd
});

```
- Custom Performance Marks
```
performance.mark('start');
// some code
performance.mark('end');
performance.measure('TaskDuration', 'start', 'end');
console.log(performance.getEntriesByName('TaskDuration'));

```
- Resource Timing
You can measure individual resource load times (CSS, images, scripts):
```
console.log(performance.getEntriesByType('resource'));

```  

Use Case:
Optimize slow-loading pages, track TTFB (Time To First Byte), measure JS execution speed.

