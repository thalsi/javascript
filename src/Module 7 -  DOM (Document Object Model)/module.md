# Module 7 — DOM (Document Object Model)

## 7.1 What is DOM?
The Document Object Model (DOM) is a programming interface for web documents.
It represents the entire HTML page as a tree of objects that JavaScript can read, modify, or delete dynamically.

- When a browser loads an HTML page:
    1. It parses the HTML.
    2. Creates a DOM Tree (hierarchical structure).
    3. Each HTML tag becomes a node/object in the tree.

- So the DOM connects:
    - HTML (structure) ↔ JavaScript (logic) ↔ CSS (style)

---
 2. DOM Tree Structure

Example HTML:
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello DOM!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>

```

The browser converts this to a DOM Tree like:
```
Document
 └── html
      ├── head
      │    └── title → "My Page"
      └── body
           ├── h1 → "Hello DOM!"
           └── p → "This is a paragraph."

```
Each element (html, body, h1, etc.) is a node.

3. Types of DOM Nodes

| Node Type          | Example             | Description                      |
| ------------------ | ------------------- | -------------------------------- |
| **Document Node**  | `document`          | Root node of the DOM tree.       |
| **Element Node**   | `<h1>`, `<p>`       | Represents HTML tags.            |
| **Text Node**      | `"Hello DOM!"`      | Represents text inside elements. |
| **Attribute Node** | `class="highlight"` | Represents HTML attributes.      |
| **Comment Node**   | `<!-- comment -->`  | Represents comments in HTML.     |

4. Accessing the DOM in JavaScript

Every page automatically gives access to a global object called document.

```
console.log(document);         // Full DOM tree
console.log(document.title);   // Access title of page
console.log(document.body);    // Access body element

```

5. Real Example

```
<!DOCTYPE html>
<html>
  <body>
    <h1 id="heading">Hello</h1>
    <script>
      // Access element
      const heading = document.getElementById('heading');

      // Read text
      console.log(heading.textContent); // "Hello"

      // Change text dynamically
      heading.textContent = 'Welcome to DOM!';
    </script>
  </body>
</html>

```
- What happens:
    - When page loads, browser creates DOM.
    - JavaScript finds <h1> using its id.
    - Updates the text content → "Welcome to DOM!"

Now the web page text changes instantly — without reloading.

---

## 7.2 Selecting Elements

You can select elements using DOM selection methods.

1. getElementById()

Selects one element by its ID.
```
const title = document.getElementById("title");
console.log(title.textContent);

```

2. querySelector()

Selects first matching element (CSS-style selector).
```
const firstPara = document.querySelector(".info");

```

3. querySelectorAll()

Selects all matching elements (returns NodeList).
```
const allParas = document.querySelectorAll("p");
allParas.forEach(p => console.log(p.textContent));

```

## 7.3 Traversing & Manipulating the DOM

Traversing (Moving through the DOM)

```
const parent = document.querySelector("ul");
const children = parent.children; // HTMLCollection
const firstChild = parent.firstElementChild;
const lastChild = parent.lastElementChild;
const next = firstChild.nextElementSibling;
const prev = lastChild.previousElementSibling;

```

- Manipulation Examples

- Create an element
```
const newItem = document.createElement("li");
newItem.textContent = "New Item";

```

- Append it
```
document.querySelector("ul").appendChild(newItem);

```

- Remove an element
```
newItem.remove();

```

- Clone an element
```
const clone = newItem.cloneNode(true);
document.body.appendChild(clone);

```

---

## 7.4 Attributes, Properties, Dataset

1. Attributes

```
const img = document.querySelector("img");
img.setAttribute("alt", "Profile picture");
console.log(img.getAttribute("src"));

```

2. Properties

```
const input = document.querySelector("input");
input.value = "John Doe"; // property, not attribute

```

3. Dataset (data-* attributes)

```
html---
<button data-user-id="123" data-role="admin">Edit</button>

js---
const btn = document.querySelector("button");
console.log(btn.dataset.userId); // "123"
console.log(btn.dataset.role); // "admin"

```

## 7.5 Events

1. Adding Events

```
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  alert("Button clicked!");
});

```

2. Event Object

```
btn.addEventListener("click", (event) => {
  console.log(event.target); // The clicked element
});

```

3. Event Delegation
Attach event to a parent to handle all child events.

```
document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
  }
});

```

4. Event Propagation

- There are two phases:
    - Capturing (top → bottom)
    - Bubbling (bottom → top, default)

```
element.addEventListener("click", handler, true); // Capturing
element.addEventListener("click", handler, false); // Bubbling

```

---

## 7.6 Form Handling, Input Events, Validation

Accessing Form Elements
```
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.querySelector("input[name='username']").value;
  console.log(name);
});

```

Input Events
```
input.addEventListener("input", (e) => {
  console.log("Typing:", e.target.value);
});

```

Validation Example
```
form.addEventListener("submit", (e) => {
  const email = form.email.value;
  if (!email.includes("@")) {
    alert("Invalid email");
    e.preventDefault();
  }
});

```

## 7.7 Accessibility Basics (ARIA, Roles, Keyboard)

Accessibility ensures your site works for everyone, including keyboard and screen-reader users.

1. ARIA Attributes
```
<button aria-label="Close window">✖</button>

```
Used when element meaning isn’t clear.

2. Roles
```
<div role="navigation">...</div>

```
Defines purpose (e.g., button, dialog, navigation).

3. Keyboard Interactions
```
button.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    button.click();
  }
});

```



