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

- Tagged Templates

```
function upper(strings, value) {
  return strings[0] + value.toUpperCase();
}
const result = upper`Hello ${'world'}`;
console.log(result); // Hello WORLD

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