# Module 9 — Front-End Architecture & State Management Concepts

## 9.1 MVC / MVVM / Component-Based Ideas


- Concept:

These are architectural patterns — they define how you organize your code (especially how data and UI interact).

1. MVC — Model View Controller

- Structure:
    - Model: Manages data and logic (e.g., database or JS objects)
    - View: What user sees (UI)
    - Controller: Connects user actions to model updates

- Flow:
    - User interacts with the View
    - Controller handles it and updates Model
    - Model notifies View → UI updates
    - Example (Vanilla JS MVC):

```
  // Model
  let counter = 0;

  // View
  function render() {
    document.body.innerHTML = 
      <h1>${counter}</h1>
      <button id="inc">+</button>
    ;
  }

  // Controller
  document.addEventListener('click', (e) => {
    if (e.target.id === 'inc') {
      counter++;
      render();
    }
  });

  render();

```

> Here, model = counter, view = DOM UI, controller = click handler.



2. MVVM — Model View ViewModel

- Used in frameworks like Angular and Vue.
    - Model: Data (like API response)
    - View: HTML template
    - ViewModel: Middle layer that binds model ↔ view using data binding

Example (Angular-like idea):
```
@Component({
  selector: 'counter',
  template: `
    <h1>{{ count }}</h1>
    <button (click)="increment()">+</button>
  `
})
export class CounterComponent {
  count = 0;
  increment() {
    this.count++;
  }
}

```

> count is model, template is view, and the component class is the ViewModel.

3. Component-Based Architecture

- Modern frameworks like React, Vue, Angular, Svelte use this.
    - App = small independent components
    - Each component has:
        - Its own state (data)
        - Its own template (HTML)
        - Its own logic (JS/TS)

Example (React-style):
```
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

```

> Modular, reusable, and easy to maintain.

---

## 9.2 State vs Props (Conceptual)

Concept: 
In component-based systems:
- State: Internal data managed within a component (can change).
- Props: Data passed to a component from its parent (read-only).

Example (React or Angular logic):
```
// Parent
function App() {
  return <Counter initialValue={5} />;
}

// Child
function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

```

- initialValue → Prop (from parent)
- count → State (internal)
-  Props are inputs, State is internal memory.


---

## 9.3 Immutability & Pure Functions

Concept:

Immutability → never directly change (mutate) existing data.
Instead, create a new copy with changes.

Pure Function → same input → same output, and no side effects (doesn’t modify external state).

Mutable (❌):
```
let arr = [1, 2, 3];
arr.push(4); // modifies the original array

```

Immutable (✅):
```
let arr = [1, 2, 3];
let newArr = [...arr, 4]; // returns new array

```

Pure Function Example:
```
// Pure
function add(a, b) {
  return a + b;
}

// Impure (❌ modifies external variable)
let total = 0;
function addToTotal(x) {
  total += x;
}

```
Why it matters:
Frameworks like React, Redux, and Akita rely on immutability to detect state changes efficiently.

---

## 9.4 Module Bundlers Intro (Concept)

A module bundler takes your multiple JavaScript files and combines (bundles) them into optimized files for the browser.

Examples: Webpack, Rollup, Parcel, Vite


Chunking:
Splitting code into smaller pieces ("chunks") so the browser only loads what’s needed.

Example:
Home page → load home.js
About page → load about.js
Shared logic → load once (common.js)

Code-Splitting Example (React lazy load):
```
const About = React.lazy(() => import('./About'));

```
> This loads the About page only when needed.

---

## 9.5 Build Tools Overview: npm scripts, Webpack, Rollup, Vite

Build Tools Purpose:
- They handle:
- Code bundling
- Minification
- Transpiling (TypeScript → JS)
- Hot reloading
- Optimizing for production


- npm scripts

Simplest automation method:
```
{
  "scripts": {
    "start": "vite",
    "build": "vite build",
    "test": "jest"
  }
}

```

Run with npm run build

- Webpack

Very configurable, used in Angular, React apps.
```
// webpack.config.js
module.exports = {
  entry: './src/index.js',
  output: { filename: 'bundle.js' },
  module: {
    rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] }]
  }
};

```
> Features: Loaders, Plugins, Code-splitting, Tree-shaking.

- Rollup
Used for libraries (like Angular packages) – smaller, simpler output.
```
export default {
  input: 'src/main.js',
  output: { file: 'bundle.js', format: 'esm' }
};

```

Vite
Modern, super-fast dev server + bundler.
  - Uses native ES modules in dev.
  - Uses Rollup for production build.

Example:
```
npm create vite@latest my-app
cd my-app
npm run dev

```
⚡ Starts instantly, no heavy rebuilds — great DX (developer experience).
