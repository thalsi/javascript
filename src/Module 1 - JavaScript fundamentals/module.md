# Module 1 — JavaScript fundamentals (the absolute basics)
1.1 What is JavaScript? history, runtime (browser vs Node)
1.2 Embedding JS in HTML — <script> tags and defer, async
1.3 First program: console.log, comments, semicolons
1.4 Values & types (Number, String, Boolean, Null, Undefined, Symbol, BigInt)
1.5 Variables: var, let, const — scope and hoisting
1.6 Basic operators: arithmetic, comparison, logical, assignment
1.7 Strings: concatenation, template literals, useful methods
1.8 Numbers: parsing, precision pitfalls, Math utilities
1.9 Booleans & truthy/falsy values


## 1.1 What is JavaScript?
A high-level, interpreted programming language that makes web pages interactive.

1. History
    - Created in 1995 by Brendan Eich in just 10 days.
    - Originally called Mocha → LiveScript → JavaScript.
    - Standardized as ECMAScript (ES) by ECMA International.

2. Runtime
    - Browser: JavaScript runs inside the browser (Chrome, Firefox, Safari) to manipulate webpages (DOM, events).
    - Node.js: Allows running JS outside the browser (backend, CLI tools).
---


## 1.2 Embedding JS in HTML — <script> Tags

Ways to include JS in HTML:

1. Inline:
```
<button onclick="alert('Hello!')">Click</button>

```

2. Internal script:
```
<script>
  console.log("Hello from JS!");
</script>

```

3. External file:
```
<script src="app.js"></script>

```

4. Attributes:
    + defer → Loads script in background and runs after HTML is parsed.
    + async → Loads script in background and runs immediately (may not wait for HTML).

---


## 1.3 First Program: console.log, Comments, Semicolons

1. Print output:
```
console.log("Hello World");

```

2. Comments:
```
// Single-line comment
/* Multi-line
   comment */

```
> Semicolons: Optional but recommended in complex code.
---

## 1.4 Values & Types 

| Feature              | **Primitive Types** (Number, String, Boolean, Null, Undefined, Symbol, BigInt) | **Objects** (Object, Array, Function, Date, etc.)                     |
| -------------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| **Mutability**       | ✅ Immutable (cannot be changed)                                                | ❌ Mutable (contents can change)                                       |
| **Stored as**        | Value (directly stored in variable)                                            | Reference (variable stores a pointer to memory)                       |
| **Memory**           | Stored in **stack**                                                            | Stored in **heap**                                                    |
| **Copying behavior** | Copy creates a **new value** (independent)                                     | Copy creates a **reference** (shared object)                          |
| **Example**          | `js let a = "hi"; let b = a; b = "bye"; console.log(a); // "hi"`               | `js let x = {age:20}; let y = x; y.age=30; console.log(x.age); // 30` |
| **Performance**      | Faster (lightweight, small size)                                               | Slower (complex, larger size)                                         |
| **`typeof` result**  | `"number"`, `"string"`, `"boolean"`, `"undefined"`, `"symbol"`, `"bigint"`     | `"object"` (or `"function"`)                                          |
| **Examples**         | `42`, `"hello"`, `true`, `undefined`, `null`, `Symbol("id")`, `123n`           | `{}`, `[]`, `function() {}`, `new Date()`                             |

---

### Type Conversion

JavaScript does implicit (coercion) and explicit (casting) type conversion.

1. Explicit (casting):
```
Number("123");  // 123
String(123);    // "123"
Boolean(0);     // false

```
2.Implicit (coercion): 
```
"5" + 1;    // "51" (string concat)
"5" - 1;    // 4   (string → number)
true + 1;   // 2   (true → 1)

```

- JavaScript is a dynamically typed, loosely typed language.
    + Dynamically typed → You don’t declare variable types, they are assigned at runtime.
    + Loosely typed → A variable’s type can change during execution.

Example:
```
let x = 42;       // number
x = "forty two";  // now a string
```

### There are two main categories of types:
    1. Primitive Types (Immutable, stored by value)
      + Types: Number, String, Boolean, Null, Undefined, Symbol, BigInt.
      + Immutable: Once created, you cannot change the value itself.If you "modify" it, JavaScrip actually creates a new value in memory.
      + Stored by value: A copy of the value is stored, not the original reference.
```
let x = "hello";
x[0] = "H";  
console.log(x); // "hello" ❌ no change (string immutable)

let y = x; // copy value
x = "world"; 
console.log(y); // "hello" (independent copy)
console.log(x); // "world"

```

    2. Objects (mutable, stored by reference)

    + Types: Object, Array, Function, Date, RegExp, etc.
    + Mutable: You can change the contents (properties/elements) without creating a new object.
    + Stored by reference: Variable holds a reference (pointer) to the memory location.
    If two variables reference the same object, changes in one affect the other.

```
let obj1 = { name: "Alice" };
let obj2 = obj1;  // reference copy, not a new object

obj2.name = "Bob";  
console.log(obj1.name); // "Bob" ✅ changed for both

let arr = [1, 2, 3];
arr.push(4);  
console.log(arr); // [1,2,3,4] ✅ array mutated

```
#### 1.4.1 Primitive Types (7 total)

1. Number
- All numbers (integers & floats) are stored as 64-bit floating point (IEEE 754).

Special values:
```
Infinity;   // positive infinity
-Infinity;  // negative infinity
NaN;        // "Not a Number" (result of invalid math)
```

Example:
```
42;        // integer
3.14;      // floating point
1 / 0;     // Infinity
"abc" * 2; // NaN
```

⚠️ Gotcha: Floating point precision.
```
0.1 + 0.2 === 0.3; // false (0.30000000000000004)
```
2. String

Represents text, always in UTF-16 encoding.

Can be written with:
```
Single quotes 'hello'
Double quotes "hello"
Backticks (template literals) `hello ${name}`
```

Example:
```
let name = "Alice";
console.log(`Hi ${name}, 2+2 = ${2+2}`);
```

Strings are immutable:
```
let str = "hello";
str[0] = "H";   // ❌ doesn’t work
console.log(str); // "hello"
```

3. Boolean
Only two values: true and false.
Commonly used in conditions:
```
let isLoggedIn = true;
if (isLoggedIn) {
  console.log("Welcome!");
}
```

4. Null

Intentional absence of value.

Type check oddity:
```
typeof null; // "object" (historic bug in JS)
```
5. Undefined
Variable declared but not assigned.

Example:
```
let x;
console.log(x); // undefined
```

Difference from null:
```
null → "value is empty, intentionally set"
undefined → "not defined / not assigned yet"
```

6. Symbol (ES6)
Unique, immutable identifier.
Used as object property keys to avoid collisions.

Example:
```
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2); // false
```

7. BigInt (ES11 / ES2020)

For arbitrary large integers beyond Number.MAX_SAFE_INTEGER (2^53 - 1).
Created by appending n.

Example:
```
let big = 123456789012345678901234567890n;
console.log(big * 2n);
```
⚠️ Gotcha: Cannot mix Number and BigInt directly.

```
10n + 5; // ❌ TypeError
1.4.2 Objects (Non-Primitive Types)
```

Everything else is an object: arrays, functions, dates, regex, etc.

Stored by reference (variables point to memory location).

Example:
```
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1); // [1,2,3,4] → both point to same object
```

1.4.3 Type Checking

typeof operator:
```
typeof 42;        // "number"
typeof "hi";      // "string"
typeof true;      // "boolean"
typeof undefined; // "undefined"
typeof null;      // "object" (weird legacy bug)
typeof Symbol();  // "symbol"
typeof 10n;       // "bigint"

Array.isArray([]); // true
```
value instanceof Object for objects.


1.4.4 Type Conversion (Coercion)

JavaScript does implicit type coercion in operations.

Number + String → String
```
1 + "2"; // "12"
```

Boolean → Number
```
true + 1; // 2
```

Explicit conversion:
```
Number("42");  // 42
String(42);    // "42"
Boolean(0);    // false
```

⚠️ Gotcha with == (loose equality):
```
0 == false;  // true
0 === false; // false
```

✅ Summary — Key Points to Remember

7 primitive types + objects.
Numbers are floating point → beware precision errors.
Strings immutable, use template literals.
null vs undefined → intentional absence vs not assigned.
Symbols & BigInt are newer ES features.
Type coercion can be helpful or dangerous → prefer === over ==.
---

## 1.5 Variables: var, let, const

var → Function-scoped, hoisted (old style, avoid)
let → Block-scoped, can be reassigned

const → Block-scoped, cannot be reassigned

```
var x = 10;   // old style
let y = 20;   // modern, changeable
const z = 30; // constant

```

In JavaScript, variables are containers for values.
How we declare them affects their scope, mutability, and safety.

1. var (old way, ES5 and earlier)

Introduced in 1995 (original JS).
Function-scoped (NOT block-scoped).
Can be redeclared and updated.
Supports hoisting (moved to top of scope, initialized as undefined).

Example:
```
var x = 10;
var x = 20;   // ✅ Redeclared
x = 30;       // ✅ Updated
console.log(x); // 30
```

Block-scope issue:
```
if (true) {
  var y = 50;
}
console.log(y); // ✅ 50 (leaks out of block)
```

Hoisting issue:
```
console.log(a); // undefined (not error!)
var a = 10;
```
👉 Problem: leads to bugs in big programs → replaced by let & const.

2. let (ES6, 2015)

Block-scoped (lives only inside {}).
Can be updated, but not redeclared in the same scope.
Hoisted but in Temporal Dead Zone (TDZ) → can’t access before declaration.

Example:
```
let age = 25;
age = 26;    // ✅ Updated
let age = 27; // ❌ Error (redeclared)
```

Block safety:
```
if (true) {
  let z = 99;
}
console.log(z); // ❌ ReferenceError
```

TDZ example:
```
console.log(a); // ❌ ReferenceError
let a = 5;
```
3. const (ES6, 2015)

Block-scoped (same as let).
Must be initialized at declaration.
Cannot be reassigned, but objects/arrays inside can still mutate.

Example:
```
const pi = 3.14;
pi = 3.1416; // ❌ Error
```

But with objects:
```
const user = { name: "Ali" };
user.name = "Sara";  // ✅ Allowed (object mutated)
user = { name: "John" }; // ❌ Error (reassignment)
```
👉 Rule: const protects variable binding, not value contents.


| Feature            | `var`                         | `let`                   | `const`                   |
| ------------------ | ----------------------------- | ----------------------- | ------------------------- |
| **Scope**          | Function                      | Block                   | Block                     |
| **Hoisting**       | Yes (initialized `undefined`) | Yes (TDZ until defined) | Yes (TDZ until defined)   |
| **Redeclaration**  | ✅ Allowed                     | ❌ Not allowed           | ❌ Not allowed             |
| **Reassignment**   | ✅ Allowed                     | ✅ Allowed               | ❌ Not allowed             |
| **Initialization** | Optional                      | Optional                | Mandatory                 |
| **Best Use**       | ❌ Avoid                       | General use             | Constants, default choice |

---

## 1.6 Basic Operators

Operators are symbols that perform actions on values/variables.
JavaScript has several categories of operators.

1. Arithmetic Operators

Used for mathematical calculations.

| Operator | Example  | Result | Notes                                |
| -------- | -------- | ------ | ------------------------------------ |
| `+`      | `5 + 3`  | `8`    | Addition (also concatenates strings) |
| `-`      | `5 - 3`  | `2`    | Subtraction                          |
| `*`      | `5 * 3`  | `15`   | Multiplication                       |
| `/`      | `10 / 2` | `5`    | Division                             |
| `%`      | `10 % 3` | `1`    | Modulus (remainder)                  |
| `**`     | `2 ** 3` | `8`    | Exponentiation (power)               |

Exsample:
```
console.log(5 + "5"); // "55" (string concatenation)
console.log(5 - "2"); // 3   (string → number)

```
## 2. Assignment Operators

Assign values (with or without operations).

| Operator | Example   | Equivalent   |
| -------- | --------- | ------------ |
| `=`      | `x = 5`   | Assign 5     |
| `+=`     | `x += 3`  | `x = x + 3`  |
| `-=`     | `x -= 2`  | `x = x - 2`  |
| `*=`     | `x *= 4`  | `x = x * 4`  |
| `/=`     | `x /= 2`  | `x = x / 2`  |
| `%=`     | `x %= 3`  | `x = x % 3`  |
| `**=`    | `x **= 2` | `x = x ** 2` |

## 3. Comparison Operators

Used to compare values → return true / false.

| Operator | Example     | Result                                  |
| -------- | ----------- | --------------------------------------- |
| `==`     | `5 == "5"`  | true (loose equality, coercion allowed) |
| `===`    | `5 === "5"` | false (strict equality, no coercion)    |
| `!=`     | `5 != "5"`  | false                                   |
| `!==`    | `5 !== "5"` | true                                    |
| `>`      | `5 > 3`     | true                                    |
| `<`      | `5 < 3`     | false                                   |
| `>=`     | `5 >= 5`    | true                                    |
| `<=`     | `3 <= 5`    | true                                    |

> 👉 Always prefer === and !== to avoid coercion bugs.

### 4. Logical Operators

| Operator                  | Example             | Result    |        |   |         |      |
| ------------------------- | ------------------- | --------- | ------ | - | ------- | ---- |
| `&&` (AND)                | `true && false`     | false     |        |   |         |      |
| \`                        |                     | \` (OR)   | \`true |   | false\` | true |
| `!` (NOT)                 | `!true`             | false     |        |   |         |      |
| `??` (Nullish Coalescing) | `null ?? "default"` | "default" |        |   |         |      |


### 5. Unary Operators

Operate on a single operand.

| Operator          | Example           | Result              |
| ----------------- | ----------------- | ------------------- |
| `+` (unary plus)  | `+"5"`            | 5 (string → number) |
| `-` (unary minus) | `-"5"`            | -5                  |
| `++` (increment)  | `let x=5; x++;`   | 6                   |
| `--` (decrement)  | `let y=5; y--;`   | 4                   |
| `typeof`          | `typeof "hi"`     | "string"            |
| `delete`          | `delete obj.prop` | removes property    |
| `void`            | `void(0)`         | `undefined`         |

### 6. Ternary Operator (Conditional)

Shortcut for if-else.

```
let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result); // "Adult"

```

### 7. Bitwise Operators (rarely used in daily JS)

Work at binary level.

| Operator  | Example    | Result                                |     |   |
| --------- | ---------- | ------------------------------------- | --- | - |
| `&` (AND) | `5 & 1`    | 1                                     |     |   |
| \`        | \` (OR)    | \`5                                   | 1\` | 5 |
| `^` (XOR) | `5 ^ 1`    | 4                                     |     |   |
| `~` (NOT) | `~5`       | -6                                    |     |   |
| `<<`      | `5 << 1`   | 10 (shift left)                       |     |   |
| `>>`      | `5 >> 1`   | 2  (shift right)                      |     |   |
| `>>>`     | `-5 >>> 1` | large positive (unsigned right shift) |     |   |

### Operator Precedence

Some operators run before others.
Order:

1. () Parentheses (highest)
2. ++ -- ! typeof (unary)
3. ** (exponentiation, right-to-left)
4. * / %
5. + -
6. < <= > >=
7. == != === !==
8. &&
9. ||
10. ?? (nullish coalescing)
11. ?: (ternary)
12. = += -= … (assignment, lowest)

```
console.log(2 + 3 * 4);     // 14 (multiplication first)
console.log((2 + 3) * 4);   // 20 (parentheses override)

```
---

## 1.7 Strings

Concatenation:
```
let name = "Alice";
console.log("Hello " + name);
```

Template literals:
```
console.log(`Hello ${name}`);
```

Useful methods:
```
"hello".toUpperCase();  // "HELLO"
"  trim  ".trim();      // "trim"
"hello".includes("he"); // true
"abc".replace("a", "z"); // "zbc"
```
1.8 Numbers

Parsing:
```
parseInt("42"); // 42
parseFloat("3.14"); // 3.14
Number("10"); // 10
```

Precision pitfalls:
```
0.1 + 0.2; // 0.30000000000000004
```

Math utilities:
```
Math.round(3.6);  // 4
Math.floor(3.9);  // 3
Math.ceil(3.1);   // 4
Math.random();    // random between 0 and 1
```
1.9 Booleans & Truthy/Falsy Values

Truthy values: "hello", 123, true, [], {}
Falsy values: 0, "", null, undefined, NaN, false

Example:
```
if ("") {
  console.log("truthy");
} else {
  console.log("falsy"); // will run
}
```