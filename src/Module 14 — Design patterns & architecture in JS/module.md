# 14.1 Module Pattern & Revealing Module Pattern

Module Pattern

Purpose: Encapsulate private variables and methods, exposing only what’s necessary.
Why: Avoids global namespace pollution.
Uses: Organizing code into reusable, self-contained units.

Example:
```
const Counter = (function () {
  let count = 0; // private variable

  function increment() {
    count++;
  }

  function getValue() {
    return count;
  }

  return {
    increment,
    getValue,
  };
})();

Counter.increment();
console.log(Counter.getValue()); // 1

```

Revealing Module Pattern

Purpose: Same as Module pattern, but clearly reveals which members are public.
Advantage: Cleaner and easier to understand structure.

Example:
```
const UserModule = (function () {
  let name = 'Thasleeh';

  function setName(newName) {
    name = newName;
  }

  function getName() {
    return name;
  }

  return {
    setName,
    getName,
  };
})();

```

## 14.2 Singleton, Factory, Observer, Pub/Sub
Singleton Pattern

Purpose: Ensures only one instance of an object exists.
Used in: Configuration, Logging, Database connections.

Example:
```
const Singleton = (function () {
  let instance;

  function createInstance() {
    return { name: 'Only Instance' };
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
console.log(s1 === s2); // true

```
Factory Pattern
Purpose: Create objects without specifying exact class/type.
Used in: UI components, API response handlers.

Example:
```
function CarFactory(type) {
  if (type === 'electric') {
    return { brand: 'Tesla', battery: '100%' };
  } else if (type === 'diesel') {
    return { brand: 'Ford', fuel: 'Diesel' };
  }
}

const car1 = CarFactory('electric');
console.log(car1);

```

🟦 Observer Pattern

Purpose: One-to-many relationship between objects — when one changes, others get notified.

Used in: UI updates, event handling.
Pub/Sub Pattern (Publish / Subscribe)
Purpose: Decouples sender and receiver of data.
Used in: Messaging systems, event buses (React, Angular, Node.js).

Example:
```
const PubSub = {
  events: {},
  subscribe(event, callback) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(callback);
  },
  publish(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(cb => cb(data));
    }
  },
};

PubSub.subscribe('onLogin', data => console.log('User logged in:', data));
PubSub.publish('onLogin', { user: 'Thasleeh' });

```
## 14.3 Middleware Pattern

Concept:

Chain of functions that process a request or action.

Each middleware can modify input/output or pass control.

Used in: Express.js, Redux, Angular interceptors.

Example (Express-like):
```
function middleware1(req, next) {
  req.user = 'Thasleeh';
  next(req);
}

function middleware2(req, next) {
  console.log('Request by:', req.user);
  next(req);
}

function runMiddlewares(req, middlewares) {
  let index = 0;
  function next(req) {
    if (index < middlewares.length) {
      middlewares[index++](req, next);
    }
  }
  next(req);
}

runMiddlewares({}, [middleware1, middleware2]);

```
---
## 14.4 Functional Programming Concepts

Pure Functions

No side effects.

Always return same output for same input.

```
function add(a, b) {
  return a + b; // pure function
}

```

Higher-Order Functions: map(), filter(), reduce()
```
const nums = [1, 2, 3, 4];

// map
const doubled = nums.map(n => n * 2);

// filter
const evens = nums.filter(n => n % 2 === 0);

// reduce
const sum = nums.reduce((acc, n) => acc + n, 0);

```

Currying
Transform a function with multiple arguments into a sequence of functions with one argument each.
```
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

console.log(multiply(2)(3)); // 6

```

## 14.5 Reactive Programming Intro (Observables Concept)

Reactive Programming

Data as streams that can be observed and reacted to over time.

Used in: RxJS (Angular), ReactiveX.

Example using RxJS:
```
import { fromEvent } from 'rxjs';

const clicks = fromEvent(document, 'click');
clicks.subscribe(event => console.log('Clicked:', event));

```

- Observable: Data stream.
- Observer: Listens to changes.
- Subscription: Connection between them.