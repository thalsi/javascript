# Module 5 — Modern JavaScript (ES6+ essentials)

## 1 — Big picture (short)

1. var → function-scoped, hoisted (initialized as undefined), allows redeclaration — legacy, avoid it.

2. let → block-scoped, not accessible before initialization (TDZ), cannot redeclare in same scope, can reassign.

3. const → block-scoped, not accessible before init (TDZ), cannot be reassigned, cannot redeclare in same scope — binding is constant, not the value. Objects/arrays can still be mutated.

---

## 2 — Hoisting vs TDZ (Temporal Dead Zone)

~~~
// var is hoisted and initialized to undefined:
console.log(a); // undefined
var a = 10;

// let/const are hoisted but are in TDZ until initialization:
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 5;
~~~

> Meaning: JavaScript knows about the let/const identifier before execution reaches the declaration, but you cannot read/write it until the line where it’s initialized. Accessing it earlier throws ReferenceError.

---

## 3 — Block scoping examples

```
if (true) {
  var x = 1;
  let y = 2;
}
```
console.log(x); // 1  — var leaks out of block (function-scoped)
console.log(y); // ReferenceError: y is not defined — let is block-scoped

> Use block scoping (let/const) to limit variable lifetime to the block where it’s used — reduces bugs.

---

## 4 — var vs let in loops and closures (classic gotcha)

```
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log('var', i), 10);
}
// var 3
// var 3
// var 3

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log('let', j), 10);
}
// let 0
// let 1
// let 2

```
> Why? var i is one binding shared by all iterations. let j creates a new binding each iteration (ES6 creates a fresh j per loop iteration), so closures capture the correct iteration value.

---

## 5 — const binding vs immutability
```
const n = 5;
n = 6; // TypeError: Assignment to constant variable.

const arr = [1];
arr.push(2);      // allowed — arr now [1, 2]
arr[0] = 99;      // allowed — mutating contents
arr = [];         // TypeError — can't reassign the binding
```

> const prevents reassigning the variable identifier to a new value, but does not freeze the object it refers to.

---

To make objects immutable (shallow):

```
const o = Object.freeze({ a: 1 });
o.a = 2; // silently ignored in non-strict mode or TypeError in strict mode

```
> For deep freeze you need a recursive function (example later).
---

## 6 — Redeclaration rules

```
var v = 1;
var v = 2; // allowed

let l = 1;
let l = 2; // SyntaxError: Identifier 'l' has already been declared

const c = 1;
const c = 2; // SyntaxError

```

---
## 7 — More concrete examples & explanations

```
function test() {
  console.log(x); // undefined (var hoisted)
  var x = 1;

  console.log(y); // ReferenceError — TDZ for let
  let y = 2;
}
test();

```

Example: const with objects — shallow freeze and deep freeze

```
// Shallow freeze
const person = { name: 'A', meta: { age: 30 } };
Object.freeze(person);
person.name = 'B';         // ignored (or TypeError in strict mode)
person.meta.age = 31;      // allowed — nested object still mutable (shallow)

// Deep freeze function
function deepFreeze(obj) {
  Object.getOwnPropertyNames(obj).forEach(prop => {
    const value = obj[prop];
    if (value && typeof value === 'object') deepFreeze(value);
  });
  return Object.freeze(obj);
}

const deep = deepFreeze({ a: { b: 1 } });
deep.a.b = 2; // no effect (object deeply frozen)

```

## 8 — When to use const, let, var — Best practices

1. Default to const. If a binding never needs to be reassigned, use const. This communicates intent clearly.

2. Use let when reassignment is required (loop counters, accumulators, temporary state).

3. Avoid var completely in modern code. Use ESLint rules: "no-var": "error" and "prefer-const": "error".

4. Prefer immutability for easier reasoning: prefer creating new objects/arrays when possible instead of mutating in place. Example using spread:

```
const newArr = [...oldArr, item];
const newObj = { ...oldObj, updatedKey: value };

```

5. Use const for references to objects that represent value-objects / config (e.g., const CONFIG = { ... }), and freeze if you need to enforce immutability at runtime.

6. Naming convention: use UPPER_CASE for compile-time/semantic constants (like const TAX_RATE = 0.05) — optional, style preference.

---
## 9 — Common gotchas & how to avoid them

- Accidental global: x = 1 (no var/let/const) creates global in non-strict mode — avoid by always using declarations and enable strict mode ("use strict";).

- Rebinding vs mutating confusion: People assume const means object won't change — explain to teammates.

- For-loops: Use let for counters if you plan to increment. For for...of, const is fine because each iteration has a new binding:

```
for (const item of arr) {
  // cannot reassign item inside loop, but each iteration item is newly bound
}

```

---

## 10 — Real-world examples you'll hit

Example: safely using closures inside loops (module pattern)

```
// Bad - using var
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log('bad', i), i * 100);
}
// prints 'bad 4' 3 times (if loop runs to 4), because var is shared

// Good - using let
for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log('good', i), i * 100);
}
// prints good 1, good 2, good 3

```

---

## Example: prefer const — safer refactoring

```
// If you declare everything as const, accidental reassignments throw early:
const user = getUser();
// ...later code mistakenly tries:
user = {}; // TypeError — you'll see it immediately

```

---