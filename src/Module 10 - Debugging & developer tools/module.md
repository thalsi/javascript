# Module 11 — Debugging & Developer Tools

## 11.1 Console Techniques & Debugging Patterns

The console object in browsers helps you inspect variables, track execution flow, and profile performance.


| Command                                  | Description                    | Example                                                              |
| ---------------------------------------- | ------------------------------ | -------------------------------------------------------------------- |
| `console.log()`                          | Prints general information     | `console.log('User:', user)`                                         |
| `console.warn()`                         | Displays warnings in yellow    | `console.warn('Deprecated method used')`                             |
| `console.error()`                        | Displays errors in red         | `console.error('API failed:', err)`                                  |
| `console.info()`                         | Prints info messages           | `console.info('Loading module...')`                                  |
| `console.table()`                        | Displays array/object in table | `console.table(users)`                                               |
| `console.group()` / `console.groupEnd()` | Groups related logs            | `console.group('User Data'); console.log(user); console.groupEnd();` |
| `console.time()` / `console.timeEnd()`   | Measures execution time        | `console.time('load'); fetchData(); console.timeEnd('load');`        |


Debugging patterns:

- Use guard logs to verify function entry points.
- Log state snapshots before and after actions.
- Use breakpoints instead of spamming logs for complex logic.
- Always remove or disable logs in production builds.

---

## 11.2 Chrome DevTools: Elements, Console, Network, Performance, Memory

| Tab             | Purpose                                       | Key Uses                                           |
| --------------- | --------------------------------------------- | -------------------------------------------------- |
| **Elements**    | Inspect & edit HTML/CSS live                  | Modify styles, view DOM hierarchy, check box model |
| **Console**     | Run JS commands & see logs                    | Debug variables (`$0` refers to selected element)  |
| **Network**     | Monitor API requests, assets, and performance | View headers, payload, response time, and size     |
| **Performance** | Profile rendering & JS execution time         | Record runtime to find bottlenecks                 |
| **Memory**      | Detect memory leaks                           | Take heap snapshots and compare allocations        |


## 11.3 Source Maps & Debugging Transpiled Code

Modern frameworks (Angular, React, Vue) use transpilation and bundling (TypeScript → JS, SCSS → CSS).
Source maps link compiled code back to the original source files.

```
//# sourceMappingURL=app.js.map

```
When enabled (default in Angular dev builds), DevTools shows your original .ts or .scss file even though the browser runs the compiled .js file.

Tips:
- Ensure sourceMap: true in tsconfig.json.
- In DevTools, go to Settings > Sources > Enable JavaScript Source Maps.
- Avoid source maps in production to protect code and reduce file size.

---

## 11.4 Memory Leaks: Spotting & Fixing

Memory leak = unused objects kept in memory → slower performance over time.

Common causes:
  - Unremoved event listeners (addEventListener without removeEventListener)
  - Global variables never released
  - Large caches or DOM nodes kept in arrays
  - Timers (setInterval, setTimeout) not cleared

Fix pattern:
```
ngOnDestroy() {
  this.subscription.unsubscribe(); // Angular example
  clearInterval(this.timer);
  this.element.removeEventListener('click', this.handler);
}

```
Detection tools:
- Chrome DevTools > Memory tab → Heap snapshot
- Chrome DevTools > Performance tab → Record JS heap usage over time
- Look for increasing memory graphs after multiple user actions

---

## 11.5 Logging Best Practices

1. Log levels
  - debug – detailed internal info
  - info – application progress
  - warn – potential issues
  - error – actual problems

2. Use structured logging
```
console.log({ module: 'Auth', event: 'LoginSuccess', userId });

```
3. Contextual logs

Include user ID, session, or component name.
Example: console.log('[CartComponent] Item added', itemId)

4. Avoid over-logging

Too many logs slow down the app.
Disable verbose logs in production (environment.production flag in Angular).

5. Use a logging service

For enterprise apps, use centralized logging (e.g. Sentry, LogRocket, Winston).
Angular pattern:
```
if (!environment.production) {
  console.debug('Debug info:', data);
}

```