# Module 6 — Asynchronous JavaScript

## 6.1 The Event Loop, Call Stack, Task Queue, Microtasks — How JS Concurrency Works

JavaScript is single-threaded, meaning it executes one line of code at a time (on one main thread).
But it can appear asynchronous thanks to the event loop mechanism.

- Core Components:
    1. Call Stack – Where JS executes functions one by one.
    2. Heap – Memory allocation space for objects.
    3. Web APIs (Browser) – Handle async tasks like setTimeout, fetch, DOM events, etc.
    4. Task Queue (Callback Queue) – Stores macrotasks (e.g., from setTimeout, setInterval).
    5. Microtask Queue – Stores microtasks (e.g., from Promises, queueMicrotask).

- Event Loop Process
    1. Executes everything in the call stack.
    2. When empty → checks microtask queue (executes all microtasks).
    3. Then → executes one macrotask (from task queue).
    4. Repeats infinitely.

- Example:

```
console.log('Start');

setTimeout(() => console.log('setTimeout'), 0);

Promise.resolve().then(() => console.log('Promise'));

console.log('End');

```
- Output:
```
Start
End
Promise
setTimeout

```

> 👉 Promises (microtasks) run before setTimeout (macrotasks).
---

## 6.2 Callbacks: Pyramid of Doom & Callback Patterns

- Before Promises, callbacks were the main way to handle async operations.

```
function getData(callback){
    setTimeout(()=>{
        callback('data received');
    },1000);
}

getData(result=> console.log(result));
```

- Pyramid of Doom (Callback Hell):
Nested callbacks make code hard to read and maintain:

```
login(user, pass, token => {
  getUserData(token, userData => {
    getPosts(userData.id, posts => {
      displayPosts(posts);
    });
  });
});

```

- Solutions:
    - Modularize functions
    - Use Promises
    - Use async/await
---

# 6.3 Promises: Creation, Chaining, Promise.all, Promise.race, allSettled

A Promise represents a value that will be available now, later, or never.

1. Creating a Promise
```
const feachData= new Promise((resolve, reject)=>{
setTimeout(()=> resolve('success'),1000);
});
```

2. Consuming a Promise
```
fetchData.then(result=> console.log(result))
        .catch(error=> console.log(error))
        .finally(()=> console.log("done"));
```

3. Chaining Promises
```
fetchUser()
  .then(user => fetchPosts(user.id))
  .then(posts => display(posts))
  .catch(error => console.error(error));
```

4. Promise Utilities
    1. `Promise.all([p1, p2, p3])` → Waits for all promises, rejects if any fail.
    2. `Promise.allSettled([p1, p2])` → Waits for all, returns success/failure of each
    3. `Promise.race([p1, p2])` → Returns the first settled promise (success/fail).
    4. `Promise.any([p1, p2])` → Returns first fulfilled promise.

1. Promise.all([...])
Waits for all promises to fulfill.
✅ If all succeed, it returns an array of results.
❌ If any one fails, it immediately rejects with that error.

- Example:
```
const p1 = Promise.resolve('A');
const p2 = Promise.resolve('B');
const p3 = Promise.resolve('C');

Promise.all([p1, p2, p3])
  .then(results => console.log(results))
  .catch(error => console.error('Error:', error));

```
- Output:
```
['A', 'B', 'C']

```
- Example with Rejection:
```
const p1 = Promise.resolve('A');
const p2 = Promise.reject('Error in B');
const p3 = Promise.resolve('C');

Promise.all([p1, p2, p3])
  .then(console.log)
  .catch(error => console.error('Error:', error));

```
- Output:
```
Error: Error in B

```
> 👉 Use case: When all async operations are required to succeed (like loading all resources before rendering UI).
---

2. 🔍 2. Promise.allSettled([...])

Waits for all promises, no matter whether they resolve or reject.
Returns an array describing the outcome of each promise.

Example:
```
const p1 = Promise.resolve('Success A');
const p2 = Promise.reject('Failed B');
const p3 = Promise.resolve('Success C');

Promise.allSettled([p1, p2, p3])
  .then(results => console.log(results));

```

Output:
```
[
  { status: 'fulfilled', value: 'Success A' },
  { status: 'rejected', reason: 'Failed B' },
  { status: 'fulfilled', value: 'Success C' }
]

```

> 👉 Use case: When you want to know results of all promises (success or failure), e.g., logging, reporting, or partial data handling.

---

3. Promise.race([...])

Returns the first promise that settles (resolves or rejects).
Whichever finishes first — success or failure — decides the result.

Example:
```
const p1 = new Promise(resolve => setTimeout(resolve, 100, 'A'));
const p2 = new Promise(resolve => setTimeout(resolve, 50, 'B'));

Promise.race([p1, p2])
  .then(result => console.log('Winner:', result))
  .catch(console.error);

```

Output:
```
Winner: B

```

Example with rejection:
```
const p1 = new Promise((_, reject) => setTimeout(reject, 50, 'Error'));
const p2 = new Promise(resolve => setTimeout(resolve, 100, 'Success'));

Promise.race([p1, p2])
  .then(console.log)
  .catch(error => console.error('Race Error:', error));

```

Output:
```
Race Error: Error

```

> 👉 Use case: Timeout handling or choosing the fastest response between multiple sources.

---

4. Promise.any([...])

Returns the first fulfilled (resolved) promise.
Ignores rejections — only fails if all promises reject.

Example:
```
const p1 = Promise.reject('Error A');
const p2 = new Promise(resolve => setTimeout(resolve, 100, 'B'));
const p3 = Promise.reject('Error C');

Promise.any([p1, p2, p3])
  .then(result => console.log('First Success:', result))
  .catch(error => console.error('All Failed:', error));

```
Output:
```
First Success: B

```

Example (all reject):
```
Promise.any([
  Promise.reject('A failed'),
  Promise.reject('B failed')
])
  .then(console.log)
  .catch(error => console.error(error.errors));

```
Output:
```
['A failed', 'B failed']

```
> 👉 Use case: When you need any successful result (e.g., first server that responds).

---

| Utility                | Waits for all? | Fails early?           | Returns when                 | Return value                              |
| ---------------------- | -------------- | ---------------------- | ---------------------------- | ----------------------------------------- |
| **Promise.all**        | ✅ Yes          | ❌ Yes (if any reject)  | All succeed                  | Array of values                           |
| **Promise.allSettled** | ✅ Yes          | ❌ No                   | All settle (success or fail) | Array of objects `{status, value/reason}` |
| **Promise.race**       | ❌ No           | ✅ Yes                  | First settle (success/fail)  | Single result or error                    |
| **Promise.any**        | ❌ No           | ❌ No (unless all fail) | First success                | Single successful value                   |

---

## 6.4 Async/Await: Syntax, Error Handling, Concurrency Patterns

- Async/await is syntax sugar over Promises — makes async code look synchronous.

Example:
```
async function getData(){

    try{
        const user= await feachUser();
        const post= await feachPost(user.id);

        console.log(post);
    }catch (err){
        console.log(err);
    }

}
```

- Parallel Execution

Run async operations concurrently:
```
const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);

```
- Error Handling
    - Use try/catch
    - Combine with Promise.allSettled() for multiple operations

---

## 6.5 Cancellation Patterns & AbortController

Some async operations (like fetch) can be canceled using AbortController.

Example:
```
const controller = new AbortController();

fetch("https://api.example.com/data", { signal: controller.signal })
  .then(res => res.json())
  .then(console.log)
  .catch(err => {
    if (err.name === 'AbortError') console.log('Request canceled');
  });

// Cancel after 1 second
setTimeout(() => controller.abort(), 1000);

```
- Use Cases:
    - Cancel pending network requests
    - Avoid race conditions in UI (when switching pages or filters)

---

## 6.6 Debounce & Throttle (Use Cases and Implementations)

Debounce – Delay function execution until no calls happen within a period.
Throttle – Limit execution to once every interval.

- Debounce Example (Search Input)
Run the function only after the user stops triggering it.

- Example Use Case
    - Search box (wait until the user finishes typing before calling API)
    - Window resize event (run only after resizing stops)
    - Button click protection (avoid accidental double clicks)

- Example — Without Debounce
```
function handleSearch(event) {
  console.log('Searching for:', event.target.value);
}

document.getElementById('search').addEventListener('input', handleSearch);

```
> If a user types “hello”, the function runs 5 times (h, he, hel, hell, hello) — too many API calls!

-  With Debounce
```
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Usage
function handleSearch(event) {
  console.log('Searching for:', event.target.value);
}

const debouncedSearch = debounce(handleSearch, 500);

document.getElementById('search').addEventListener('input', debouncedSearch);

```
>🕐 Now, the function runs only once — 500ms after typing stops. 

```
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

const handleSearch = debounce(e => console.log(e.target.value), 300);

```

- Throttle Example (Scroll Event)
Run the function at regular intervals while the user keeps triggering it.

- Example Use Case
    - Scroll or resize events (limit to once every 200ms)
    - Mouse move (for drag-and-drop or animations)
    - Continuous button holding

```
function throttle(fn, interval) {
  let last = 0;
  return function(...args) {
    const now = Date.now();
    if (now - last >= interval) {
      last = now;
      fn.apply(this, args);
    }
  };
}

window.addEventListener('scroll', throttle(() => console.log('scrolling'), 500));

```

- Example — Without Throttle
```
window.addEventListener('scroll', () => {
  console.log('Scroll position:', window.scrollY);
});

```
> Scrolling fires events dozens of times per second, making the app sluggish.

---

- With Throttle

```
function throttle(fn, limit) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

// Usage
function handleScroll() {
  console.log('Scroll position:', window.scrollY);
}

const throttledScroll = throttle(handleScroll, 500);
window.addEventListener('scroll', throttledScroll);

```
> 🕐 Now, no matter how fast you scroll, the log happens once every 500ms.

---

⚙️ 3. Comparison: Debounce vs Throttle
| Feature              | **Debounce**                 | **Throttle**                                 |
| -------------------- | ---------------------------- | -------------------------------------------- |
| **When executed**    | After user stops triggering  | At fixed intervals while triggering          |
| **Example use case** | Search input, resize end     | Scroll events, continuous dragging           |
| **Delay behavior**   | Waits for quiet time         | Ignores extra triggers until interval passes |
| **Code pattern**     | `setTimeout` reset each call | `Date.now()` check or timer flag             |

---

## 6.7 Web Workers Overview (Background Threads in Browser)

Web Workers let you run JS code in background threads — avoiding UI blocking.

1. What Are Web Workers?

- Normally, JavaScript runs on a single main thread, which handles both:
    - your code execution, and
    - the browser’s UI (like rendering, scrolling, button clicks).

If your JavaScript does heavy work (e.g., loops, calculations, large data parsing),
it can block the main thread — causing the page to freeze or lag.

> Web Workers solve this by running scripts in background threads.

- They allow you to:
    - Perform CPU-intensive tasks without blocking the UI.
    - Run multiple JS threads concurrently.
    - Communicate between main thread ↔ worker via messages.

2. How Web Workers Work

- Web Workers run in a separate thread (background).

- They cannot directly access:
    - The DOM (document, window)
    - UI elements

But they can communicate with the main thread using postMessage() and onmessage.

3. Basic Example — Using a Worker

Step 1: Create a file worker.js
```
// worker.js
onmessage = function (e) {
  console.log('Worker received:', e.data);
  let total = 0;
  for (let i = 0; i < 1e9; i++) {
    total += i;
  }
  postMessage(total); // send result back
};

```

Step 2: Use it in your main JS file
```
// main.js
const worker = new Worker('worker.js');

worker.postMessage('Start calculation');

worker.onmessage = function (e) {
  console.log('Result from worker:', e.data);
};

```

✅ Output:
```
Worker received: Start calculation
Result from worker: 499999999500000000

```
> The heavy loop runs in the background — your webpage stays smooth and responsive.

4. Important Properties and Methods
| Method / Property                   | Description                          |
| ----------------------------------- | ------------------------------------ |
| `new Worker(url)`                   | Creates a new worker thread          |
| `worker.postMessage(data)`          | Sends message to the worker          |
| `worker.onmessage`                  | Receives message from worker         |
| `worker.terminate()`                | Stops the worker immediately         |
| `onmessage` (inside worker)         | Listens to messages from main thread |
| `postMessage(data)` (inside worker) | Sends data back to main thread       |

5. What Web Workers Cannot Do

- Web Workers run in isolation. They cannot:
    - Access document, window, or parent
    - Manipulate the DOM directly
    - Use alert() or confirm()
    - Access local variables or functions from the main script

- However, they can:
    - Use most JavaScript features (loops, objects, math)
    - Use XMLHttpRequest or fetch() for API calls
    - Use importScripts() to load external JS files

6. Terminating a Worker
If a worker runs indefinitely, you can stop it manually.
```
const worker = new Worker('worker.js');

// stop the worker
worker.terminate();
console.log('Worker terminated');

```
| Use Case                           | Description                                |
| ---------------------------------- | ------------------------------------------ |
| 🔢 **Large computations**          | Mathematical or financial calculations     |
| 📊 **Data processing**             | Parsing large JSON or CSV files            |
| 🖼️ **Image / video manipulation** | Filters, resizing, compression             |
| 🧬 **Machine learning**            | Running AI models (e.g., TensorFlow.js)    |
| 📡 **Background fetching**         | Sync data periodically without blocking UI |
| 🕹️ **Game logic**                 | Handle physics or collision detection      |

---
