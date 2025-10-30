# Module 12 — Performance & optimization

## 12.1 Measuring Performance: Key Metrics

Performance metrics help evaluate how fast a page loads and becomes usable for users.

| Metric                             | Meaning                                                                           | Ideal Target |
| ---------------------------------- | --------------------------------------------------------------------------------- | ------------ |
| **TTFB (Time to First Byte)**      | Time between request sent and first byte received. Measures backend/server speed. | `< 200ms`    |
| **FCP (First Contentful Paint)**   | Time until the first visible element (text/image) appears on screen.              | `< 1.8s`     |
| **LCP (Largest Contentful Paint)** | Time when the largest visible element (hero image, heading) is rendered.          | `< 2.5s`     |
| **TTI (Time to Interactive)**      | When the page becomes fully interactive (buttons, inputs work).                   | `< 3.8s`     |

Tools:
  Lighthouse (Chrome DevTools)
  WebPageTest.org
  Core Web Vitals (Google Search Console)

  ---

  ## 12.2 Critical Rendering Path & Optimizing Paint

  The critical rendering path (CRP) is the sequence of steps the browser takes to convert HTML, CSS, and JS into pixels on screen.

  Steps:

Parse HTML → Build DOM

Parse CSS → Build CSSOM

Combine → Render Tree

Layout (calculate element positions)

Paint → Display pixels

Optimizations:

Minimize critical resources (inline critical CSS)

Defer or async non-critical JS

Reduce reflows and repaints

Use CSS transforms for animations instead of top/left positioning

---

## 12.3 Code Splitting & Lazy Loading Strategies

Goal: Load only what’s needed at first, defer the rest.

Techniques:

Code Splitting: Split bundles by route or feature using Webpack, Angular CLI, etc.

```
import('./feature.module').then(m => m.FeatureModule);

```

Lazy Loading: Load components or routes only when user navigates there.
Dynamic Imports: On-demand imports in JS.

Result: Smaller initial bundle → faster first load.

---

## 12.4 Minification, Tree-Shaking, Compression

Minification: Remove spaces, comments → smaller file size.
Tree-Shaking: Remove unused JS code (dead code elimination).

Compression:

Gzip: Common compression (moderate efficiency)

Brotli: Better compression ratio (modern browsers)

---

## 12.5 Image Optimization & Responsive Images

Techniques:

Use correct format:

JPG → Photos
PNG → Transparency
SVG → Icons/Logos
WebP/AVIF → Modern formats (smaller & high quality)

Use srcset and <picture> for responsive loading:
```
<img src="small.jpg"
     srcset="medium.jpg 768w, large.jpg 1200w"
     sizes="(max-width: 768px) 100vw, 50vw"
     alt="example">

```
```
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="fallback image">
</picture>

```

Tools: TinyPNG, Squoosh, ImageOptim

---

## 12.6 Caching Strategies

Caching speeds up repeat visits by storing resources locally.

Types:

HTTP Cache (Browser Cache):

Cache-Control: max-age=31536000 → Cache for a year
ETag and Last-Modified → Validate cached responses

Service Worker Caching:
Use a Service Worker to cache assets and API responses offline.

Common strategies:

Cache First (static assets)
Network First (dynamic data)
Stale-While-Revalidate (show cached, update in background)

Example (Service Worker):
```
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(resp => 
      resp || fetch(e.request)
    )
  );
});

```