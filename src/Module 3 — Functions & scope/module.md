# Module 3 — Functions & Scope

## 3.1 Function Declaration vs Expression vs Arrow Functions

### 1. Function Declaration

```
function greet(name) {
return "Hello " + name;
}
console.log(greet("Ali"));
```

> ✅ Hoisted (can call before it’s defined).

### 2. Function Expression
```
const greet = function(name) {
  return "Hello " + name;
};

```
> ❌ Not hoisted (must be defined before use).

### 3. Arrow Function

```
const greet = (name) => "Hello " + name;

```
- Shorter syntax.
- this is not bound (uses parent’s this).
---
## 3.2 Parameters

### 1. Normal parameters

```
function add(a, b) {
  return a + b;
}

```

### 2. Default parameters

```
function greet(name = "Guest") {
  return "Hello " + name;
}
console.log(greet()); // Hello Guest

```

### 3. Rest parameters

```
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

```
---
## 3.3 Return Values & Implicit Returns

### 1. Explicit return
```
function multiply(a, b) {
  return a * b;
}

```
### 2. Implicit return (arrow functions)

```
const multiply = (a, b) => a * b;

```
---

## 3.4 Scope

### 1. Function Scope

```
function test() {
  let x = 10;
  console.log(x);
}
// console.log(x); ❌ Error

```
### 2. Block Scope

```
if (true) {
  let y = 20;
}
// console.log(y); ❌ Error
```

### 3. Lexical Environment
- Functions remember where they were created (important for closures).

## 3.5 Closures

- A closure = function + lexical environment (memory of outer variables).

```
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2

```
> ✅ Useful for data privacy, event handlers, and factories.

---

## 3.6 IIFE (Immediately Invoked Function Expression)

- Runs immediately after being created.
- Commonly used for data privacy before ES6 modules.

```
(function () {
  console.log("IIFE runs instantly!");
})();

```
---

## 3.7 Higher-order Functions

- A function that takes another function as argument OR returns a function.

```
function higherOrder(fn) {
  return fn(5);
}
console.log(higherOrder(x => x * 2)); // 10

```

- Callbacks
```
setTimeout(() => console.log("Callback executed"), 1000);

```

- Function Composition

```
const double = x => x * 2;
const square = x => x * x;

const compose = (f, g) => x => f(g(x));
const doubleThenSquare = compose(square, double);

console.log(doubleThenSquare(3)); // 36


```