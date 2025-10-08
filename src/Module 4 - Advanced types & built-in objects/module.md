
## Module 4 — Advanced types & built-in objects
- 4.1 Date object & formatting
- 4.2 Regular expressions: creation, flags, common patterns, methods
- 4.3 Map, Set, WeakMap, WeakSet — when & why to use
- 4.4 JSON: stringify, parse, safe patterns
- 4.5 Error handling: throw, try...catch...finally, custom Error types
- 4.6 Iterators & generators (basic introduction)


## 4.1 Date object & formatting
- The `Date` object is used to handle dates and times.

### 1. creation:
```
const now = new Date(); // current date and time
const specificDate = new Date('2025-10-08T23:00:00');
const timestampDate = new Date(1696802400000); // milliseconds since Jan 1, 1970

```
### 2. Common Methods::
```
const d = new Date();

d.getFullYear();   // 2025
d.getMonth();      // 0-11 (0 = Jan)
d.getDate();       // 1-31
d.getDay();        // 0-6 (0 = Sun)
d.getHours();      // 0-23
d.getMinutes();    // 0-59
d.getSeconds();    // 0-59
d.getTime();       // timestamp in ms

```

### 3. Formatting:

```
d.toDateString();   // "Wed Oct 08 2025"
d.toISOString();    // "2025-10-08T17:30:00.000Z"
d.toLocaleDateString('en-US'); // "10/8/2025"

```
> Tips: Use libraries like date-fns or moment.js for advanced formatting and manipulation.

---

## 4.2 Regular Expressions (RegEx)

### 1. Creation:
```
const regex1 = /abc/;           // literal
const regex2 = new RegExp('abc', 'i'); // constructor, 'i' = ignore case

```
- Flags:
    - g – global (find all matches)
    - i – ignore case
    - m – multiline

### 2. Common Patterns:
```
const emailPattern = /^[\w.-]+@[\w.-]+\.\w+$/;
const phonePattern = /^\d{10}$/;
const digitsPattern = /\d+/g;

```

### 3. Methods:
```
const str = "Hello 123 world";

// test
/email/.test("my email is test@example.com"); // true

// exec
const result = /\d+/.exec(str); // ["123"]

// string methods with regex
str.match(/\d+/g);    // ["123"]
str.replace(/\d+/g, "456"); // "Hello 456 world"
str.split(/\s+/);     // ["Hello", "123", "world"]

```

---

## 4.3 Map, Set, WeakMap, WeakSet

### Map – key-value store, keys can be any type

```
const map = new Map();
map.set('a', 1);
map.set({}, 'obj');
map.get('a'); // 1
map.has('a'); // true
map.delete('a');
map.size; // number of entries

```

### Set – collection of unique values
```
const set = new Set([1,2,3,3]);
set.add(4);
set.has(2); // true
set.delete(3);
set.size; // 3

```

### WeakMap – like Map, keys must be objects, allows garbage collection

```
const wm = new WeakMap();
const objKey = {};
wm.set(objKey, "value");
wm.get(objKey); // "value"

```

### WeakSet – like Set, values must be objects

```
const ws = new WeakSet();
const obj = {};
ws.add(obj);
ws.has(obj); // true

```

- When to use:
    - Map/Set – when you need iterable collections with unique keys or values.
    - WeakMap/WeakSet – when storing metadata tied to objects, without preventing garbage collection.

---

## 4.4 JSON: stringify, parse, safe patterns

```
const obj = { name: "Alice", age: 25 };

// Convert object to string
const jsonString = JSON.stringify(obj); // '{"name":"Alice","age":25}'

// Convert string to object
const parsedObj = JSON.parse(jsonString); // { name: "Alice", age: 25 }

```

- Safe patterns:
    - Handle errors with try...catch when parsing unknown JSON

```
try {
  const data = JSON.parse(userInput);
} catch(e) {
  console.error("Invalid JSON!", e);
}

```
- Custom serialization:
```
JSON.stringify(obj, ["name"]); // only include 'name'

```

## 4.5 Error Handling

### Throwing errors:
```
function divide(a, b) {
  if(b === 0) throw new Error("Division by zero!");
  return a / b;
}

```

### Try...catch...finally:

```
try {
  divide(5, 0);
} catch(e) {
  console.error("Error:", e.message);
} finally {
  console.log("Cleanup if needed");
}

```

### Custom Error types:

```
class ValidationError extends Error {
  constructor(message) {
    super(message);          // call parent Error constructor
    this.name = "ValidationError"; // set error name
  }
}


function validateAge(age) {
  if (age < 0 || age > 120) {
    throw new ValidationError("Age must be between 0 and 120");
  }
  return true; // valid input
}


try {
  validateAge(150); // invalid age
} catch (err) {
  if (err instanceof ValidationError) {
    console.error("Validation Error:", err.message);
  } else {
    console.error("Other Error:", err);
  }
}

Validation Error: Age must be between 0 and 120

```
---
## 4.6 Iterators & Generators (Basic Intro)
- Iterator: Object that implements next() returning {value, done}

```
const arr = [1,2,3];
const iterator = arr[Symbol.iterator]();
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }

```
- Generator: Function that yields values lazily
```
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();
console.log(g.next()); // { value: 1, done: false }
console.log([...g]);   // [2,3]

```
> Use cases: Lazy evaluation, infinite sequences, or custom iteration.

