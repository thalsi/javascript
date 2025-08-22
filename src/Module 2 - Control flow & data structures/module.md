# Module 2 — Control Flow & Data Structures
## 2.1 Conditional Statements

Conditional statements allow programs to make decisions.
### 1. if
```
let age = 20;
if (age >= 18) {
  console.log("You are an adult.");
}
```

### 2. if...else
```
let age = 15;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```

### 3. else if
```
let score = 75;
if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}
```
### 4. Ternary Operator

Shorthand for if...else.
```
let age = 18;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status);
```
---
## 2.2 Switch Statement

Used for multiple possible values of a variable.
```
let color = "red";

switch (color) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Get Ready");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid color");
}
```
---
## 2.3 Loops
### 1. for
```
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### 2. while
```
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### 3. do...while
```
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

### 4. for...of Iterables (arrays, strings, maps, sets)
```
let arr = [10, 20, 30];
for (let value of arr) {
  console.log(value);
}
```

### 5. for...in (works with objects)
- Objects (also arrays, but not recommended)
```
let user = { name: "Alice", age: 25 };
for (let key in user) {
  console.log(key, user[key]);
}
```
---
## 2.5 Array Methods

### 1. Adding & Removing Elements
| Method      | Description                    | Example                        |
| ----------- | ------------------------------ | ------------------------------ |
| `push()`    | Add element(s) at **end**      | `arr.push(4)` → `[1,2,3,4]`    |
| `pop()`     | Remove from **end**            | `arr.pop()` → `[1,2]`          |
| `unshift()` | Add at **beginning**           | `arr.unshift(0)` → `[0,1,2,3]` |
| `shift()`   | Remove from **beginning**      | `arr.shift()` → `[2,3]`        |
| `splice()`  | Add/Remove at **any position** | `arr.splice(1,2,"x")`          |
| `slice()`   | Copy portion (non-destructive) | `arr.slice(1,3)`               |

### 2. Searching

| Method          | Description                      | Example                             |
| --------------- | -------------------------------- | ----------------------------------- |
| `indexOf()`     | First index of value             | `[1,2,3,2].indexOf(2)` → `1`        |
| `lastIndexOf()` | Last index of value              | `[1,2,3,2].lastIndexOf(2)` → `3`    |
| `includes()`    | Check if value exists            | `[1,2,3].includes(2)` → `true`      |
| `find()`        | First element matching condition | `[5,12,8].find(x=>x>10)` → `12`     |
| `findIndex()`   | Index of first match             | `[5,12,8].findIndex(x=>x>10)` → `1` |


### 3. Iteration / Looping

| Method          | Description                      | Example                              |
| --------------- | -------------------------------- | ------------------------------------ |
| `forEach()`     | Run function for each item       | `[1,2,3].forEach(x=>console.log(x))` |
| `map()`         | Transform each item → new array  | `[1,2,3].map(x=>x*2)` → `[2,4,6]`    |
| `filter()`      | Return items that pass condition | `[1,2,3,4].filter(x=>x>2)` → `[3,4]` |
| `reduce()`      | Reduce to single value           | `[1,2,3].reduce((a,b)=>a+b,0)` → `6` |
| `reduceRight()` | Like reduce, but right→left      | `[1,2,3].reduceRight((a,b)=>a-b)`    |
| `every()`       | True if **all** match condition  | `[2,4,6].every(x=>x%2===0)` → `true` |
| `some()`        | True if **any** match condition  | `[1,3,5].some(x=>x%2===0)` → `false` |

### 4. Sorting & Reversing

| Method      | Description                    | Example                          |
| ----------- | ------------------------------ | -------------------------------- |
| `sort()`    | Sort array (string by default) | `["b","a"].sort()` → `["a","b"]` |
| `reverse()` | Reverse order                  | `[1,2,3].reverse()` → `[3,2,1]`  |

### 5. Joining & Converting

| Method       | Description             | Example                                   |
| ------------ | ----------------------- | ----------------------------------------- |
| `concat()`   | Merge arrays            | `[1,2].concat([3,4])` → `[1,2,3,4]`       |
| `join()`     | Join elements to string | `["a","b"].join("-")` → `"a-b"`           |
| `toString()` | Convert array → string  | `[1,2,3].toString()` → `"1,2,3"`          |
| `flat()`     | Flatten nested arrays   | `[1,[2,3]].flat()` → `[1,2,3]`            |
| `flatMap()`  | Map + Flatten           | `[1,2].flatMap(x=>[x,x*2])` → `[1,2,2,4]` |


### 6. Utility / Newer ES Methods
| Method            | Description                      | Example                                   |
| ----------------- | -------------------------------- | ----------------------------------------- |
| `Array.isArray()` | Check if value is array          | `Array.isArray([1,2])` → `true`           |
| `Array.from()`    | Convert iterable to array        | `Array.from("abc")` → `["a","b","c"]`     |
| `Array.of()`      | Create array from args           | `Array.of(1,2,3)` → `[1,2,3]`             |
| `fill()`          | Fill with static value           | `[1,2,3].fill(0)` → `[0,0,0]`             |
| `copyWithin()`    | Copy part of array inside itself | `[1,2,3,4].copyWithin(0,2)` → `[3,4,3,4]` |
| `keys()`          | Iterator of indexes              | `[10,20].keys()` → `0,1`                  |
| `values()`        | Iterator of values               | `[10,20].values()` → `10,20`              |
| `entries()`       | Iterator of `[index, value]`     | `[10,20].entries()` → `[0,10],[1,20]`     |

---
## 2.6 Objects

Creation
```
let user = {
  name: "Alice",
  age: 25,
  isAdmin: true
};
```

Access
```
console.log(user.name);   // dot notation
console.log(user["age"]); // bracket notation
```

Dynamic keys
```
let key = "isAdmin";
console.log(user[key]); // true

```

## 2.7 Deep vs Shallow Copy & Spread Operator

1. Shallow Copy

```
let obj1 = { a: 1, b: { c: 2 } };
let obj2 = { ...obj1 };  // spread operator (shallow)
obj2.b.c = 5;
console.log(obj1.b.c); // 5 (linked!)

```
2. Deep Copy
```
let obj1 = { a: 1, b: { c: 2 } };
let obj2 = JSON.parse(JSON.stringify(obj1));
obj2.b.c = 5;
console.log(obj1.b.c); // 2 (independent)

```
---

##2.8 Destructuring
1. Arrays
```
let arr = [10, 20, 30];
let [a, b, c] = arr;
console.log(a, b, c); // 10 20 30

```

2. Objects

```
let user = { name: "Alice", age: 25 };
let { name, age } = user;
console.log(name, age); // Alice 25

```

3. Default values

```
let [x=5, y=10] = [7];
console.log(x, y); // 7 10

```

##  2.7 Deep vs Shallow Copy & Spread Operator
1. Shallow Copy

Copies only the first level of an object/array.

If it has nested objects/arrays, those are still references (shared).

Changing nested values affects both copies.

Example:
```
let arr1 = [1, 2, [3, 4]];
let shallow = [...arr1];   // spread operator = shallow copy

shallow[0] = 99; 
console.log(arr1);     // [1, 2, [3, 4]] (no effect)

shallow[2][0] = 77;
console.log(arr1);     // [1, 2, [77, 4]]  (nested array changed!)
```

👉 Shallow = surface copy only.
Nested objects/arrays are linked.

2. Deep Copy

Copies everything, including nested objects/arrays.

Independent from the original — changes do not affect each other.

Example 1 (JSON trick, not always safe):
```
let arr1 = [1, 2, [3, 4]];
let deep = JSON.parse(JSON.stringify(arr1));

deep[2][0] = 88;
console.log(arr1); // [1, 2, [3, 4]]
console.log(deep); // [1, 2, [88, 4]]
```
Example 2 (structuredClone ✅ modern way):
```
let arr1 = [1, 2, [3, 4]];
let deep = structuredClone(arr1);

deep[2][1] = 99;
console.log(arr1); // [1, 2, [3, 4]]
console.log(deep); // [1, 2, [3, 99]]
```
3. Spread Operator (...)

Used for shallow copies, merging, or extracting values.

Works on arrays, objects, function calls.

Example: Array Copy
```
let arr = [1, 2, 3];
let copy = [...arr];

copy[0] = 99;
console.log(arr);  // [1, 2, 3] (safe, not linked on top-level)
```
Example: Object Copy
```
let obj = {a: 1, b: 2};
let copy = {...obj};

copy.a = 99;
console.log(obj);   // {a: 1, b: 2} (safe, not linked on top-level)
```
Example: Merge
```
let arr1 = [1,2];
let arr2 = [3,4];
let merged = [...arr1, ...arr2];
console.log(merged); // [1,2,3,4]
```
✅ Summary
| Type                | Description                                       | Example                | Nested Objects/Arrays |
| ------------------- | ------------------------------------------------- | ---------------------- | --------------------- |
| **Shallow Copy**    | First-level only                                  | `let copy = [...arr]`  | 🔗 Still linked       |
| **Deep Copy**       | Full independent clone                            | `structuredClone(obj)` | ✅ Safe                |
| **Spread Operator** | Shortcut for shallow copy, merging, destructuring | `let copy = {...obj}`  | Shallow only          |


👉 Memory Trick:

Spread = Surface (Shallow)

Deep Copy = Independent Life