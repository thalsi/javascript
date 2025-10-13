# Module 1 — JavaScript fundamentals (the absolute basics)
1.1 What is JavaScript? history, runtime (browser vs Node)
    * Definition: JavaScript (JS) is a high-level, interpreted programming language primarily used for web development to make websites interactive.
    * History: Created by Brendan Eich in 1995. Originally called Mocha → LiveScript → JavaScript.
    * Runtime:
       *  Browser: JS runs inside browsers like Chrome, Firefox. Can manipulate HTML/CSS (DOM),     handle events, and make network requests.
        * Node.js: JS runtime outside browser. Used for server-side programming, file handling, networking.
1.2 Embedding JS in HTML — `<script>` tags and defer, async
    3 Ways:
        1. Inline Script:
        2. Internal Script (inside HTML file):
        3. External Script (recommended):
    * Normal <script>: Browser stops reading HTML, runs the script, then continues.
    * defer: Browser keeps reading HTML, downloads the script in the background, and runs it after finishing HTML.
    * async: Browser keeps reading HTML, downloads the script, and runs it as soon as it’s ready (might interrupt HTML reading).
    ```
    <!DOCTYPE html>
    <html>
    <head>
    <title>JS Example</title>
    <script src="script.js" defer></script>
    </head>
    <body>
    <h1>My Page</h1>
    </body>
    </html>

    ```
1.3 First program: console.log, comments, semicolons
    ```
    * console.log prints messages to the console.
    * Comments:
        Single-line: // comment
        Multi-line: /* comment */
    * Semicolons: Optional in JS, but recommended for clarity.
    ```
1.4 Values & types (Number, String, Boolean, Null, Undefined, Symbol, BigInt)
- JavaScript has 7 primitive types:
| Type          | Example                 | Description         |
| ------------- | ----------------------- | ------------------- |
| **Number**    | `10`, `3.14`            | Integer or float    |
| **String**    | `"hello"`               | Text data           |
| **Boolean**   | `true`, `false`         | Logic values        |
| **Null**      | `null`                  | Intentionally empty |
| **Undefined** | `let x;`                | Not assigned yet    |
| **Symbol**    | `Symbol("id")`          | Unique identifier   |
| **BigInt**    | `12345678901234567890n` | Very large numbers  |


1.5 Variables: var, let, const — scope and hoisting
    * var: function-scoped, hoisted, can be redeclared.
    * let: block-scoped, not redeclared, preferred in modern JS.
    * const: block-scoped, cannot reassign, good for constants.

1.6 Basic operators: arithmetic, comparison, logical, assignment
    * Arithmetic: + - * / % **
    * Comparison: == === != !== > < >= <=
    * Logical: && || !
    * Assignment: = += -= *= /= %=

1.7 Strings: concatenation, template literals, useful methods
    * Concatenation: +
    * Template literals: `Hello ${name}` for embedding variables
    * Useful methods: length, toUpperCase(), toLowerCase(), slice(), includes()

1.8 Numbers: parsing, precision pitfalls, Math utilities
    * Parsing: parseInt(), parseFloat()
    * Precision pitfalls: JS uses floating-point numbers → 0.1 + 0.2 !== 0.3
    * Math utilities: Math.round(), Math.floor(), Math.ceil(), Math.random()

1.9 Booleans & truthy/falsy values
    * Truthy: values treated as true in boolean context (1, "abc", [], {})
    * Falsy: values treated as false (0, "", null, undefined, NaN, false)

