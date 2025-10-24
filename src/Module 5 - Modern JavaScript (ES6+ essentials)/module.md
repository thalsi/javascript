# Module 5 — Modern JavaScript (ES6+ Essentials)

## 5.1 Let/const revisited and block scoping best practices
ES6 introduced `let` and `const` to replace `var`.

### Key Differences
| Keyword | Scope | Reassignment | Hoisting | Use Case |
|----------|--------|---------------|-----------|-----------|
| var | Function-scoped | Yes | Yes (undefined) | Legacy code |
| let | Block-scoped | Yes | No | Variables that may change |
| const | Block-scoped | No (binding fixed) | No | Constants or never reassigned variables |

### Example
```js
{
  let a = 10;
  const b = 20;
  // console.log(a, b); // ✅ Works here
}
// console.log(a, b); // ❌ ReferenceError
```
- Best Practice:
> Use const by default; switch to let only when needed.

---

## 5.2 Template literals & tagged templates

- Template literals
 * Use backticks (`)  instead of quotes.

- Support:
  * Multiline strings
  * String interpolation `${}`
  * Expression embedding

```
const name = "Thasleeh";
const message = `Hello ${name}, welcome to JavaScript!`;
console.log(message);

```
---

## 5.3 Destructuring in depth (nested, defaults)

- Destructuring lets you unpack values from arrays or objects easily.

- Array Destructuring
```
const [x, y = 5] = [10];
console.log(x, y); // 10, 5

```

- Object Destructuring

```
const { name, age: userAge = 20 } = { name: 'Ali' };
console.log(name, userAge); // Ali, 20

```

- Nested Destructuring
```
const user = { info: { name: 'Sara', city: 'Kochi' } };
const { info: { name, city } } = user;
console.log(name, city); // Sara Kochi

```

## 5.3 Destructuring in Depth (Nested, Defaults)

Array Destructuring
```
const arr = [10, 20, 30];
const [a, b, c] = arr;
console.log(a, b, c); // 10 20 30

const [first, , third] = arr;
console.log(first, third); // 10 30

```
## 5.4 Enhanced Object Literals & Computed Property Names

- Shorthand Property
```
const name = "Thasleeh";
const age = 24;

const user = { name, age };
console.log(user); // { name: "Thasleeh", age: 24 }

```

- Method Definition Shorthand

```
const math = {
  add(a, b) { return a + b; }
};
console.log(math.add(2, 3)); // 5

```

- Computed Property Names
```
const key = "userRole";
const obj = {
  [key]: "Admin"
};
console.log(obj.userRole); // Admin

```

## 5.5 Spread & Rest Operator Advanced Uses

1. Spread (...)

- Used to expand arrays or objects.
```
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2); // [1, 2, 3, 4]

```
- Copying & Merging objects:
```
const user = { name: "Sara" };
const details = { age: 22 };
const merged = { ...user, ...details };
console.log(merged); // { name: "Sara", age: 22 }

```

2. Rest (...)

- Used to collect multiple values into an array.

```
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

```

3. Destructuring with Rest

```
const [head, ...tail] = [1, 2, 3, 4];
console.log(head, tail); // 1 [2,3,4]

```

## 5.6 Arrow Functions & this Differences

- Syntax
```
// Normal function
function add(a, b) { return a + b; }

// Arrow function
const addArrow = (a, b) => a + b;

```

- Lexical this
Arrow functions don’t have their own this.
```
const obj = {
  name: "JS",
  show: function() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
};
obj.show(); // JS

```
If using a normal function:

```
setTimeout(function() {
  console.log(this.name); // undefined
}, 1000);

```

## 5.7 Modules: import / export (Named, Default, Re-export)

Export
```
// file: math.js
export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;

// Default export
export default function multiply(a, b) {
  return a * b;
}

```

Import
```
import multiply, { add, sub } from './math.js';

console.log(add(2, 3));      // 5
console.log(multiply(3, 4)); // 12

```

Re-export
```
// file: allMath.js
export * from './math.js';

```

## 5.8 Class Syntax: Constructors, Methods, Inheritance, Static Methods

- Basic Class

```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
}

const user = new Person("Thasleeh", 24);
user.greet(); // Hello, I am Thasleeh

```

- Inheritance
```
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying.`);
  }
}

const s = new Student("Sara", 22, "A");
s.greet(); // Inherited method
s.study();

```

- Static Methods
```
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}
console.log(MathUtil.add(5, 10)); // 15

```

## 5.9 for...of, Promise, Symbol, BigInt Overview

1. for...of

Iterates over iterable objects (arrays, strings, maps).

```
const arr = [10, 20, 30];
for (const num of arr) {
  console.log(num);
}
```

2. Promise
Used for asynchronous operations.
```
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data loaded"), 1000);
});

fetchData.then(result => console.log(result));

```

3. Symbol
Unique and immutable identifier.
```
const id = Symbol('id');
const user = { [id]: 101, name: "Sara" };
console.log(user[id]); // 101

```

4. BigInt
For large integers beyond Number.MAX_SAFE_INTEGER.
```
const big = 123456789012345678901234567890n;
console.log(big + 10n);

```

