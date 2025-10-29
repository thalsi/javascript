# Module 10 — Testing & Quality

## 10.1 Unit Testing Fundamentals & Philosophy

- Verify that individual functions or components work as expected.
  - Prevent bugs early. 
  - Encourage clean, modular code.
  - Enable safe refactoring.

- Principles
  - Isolated: Test one unit at a time (no external API, DOM, or database).
  - Repeatable: Same result every time.
  - Fast: Should run in milliseconds.
  - Clear naming: Use describe / it / expect style for clarity.

Example (JavaScript):
```
function add(a, b) {
  return a + b;
}

test('adds two numbers', () => {
  expect(add(2, 3)).toBe(5);
});

```

## 10.2 Test Frameworks: Jest (Concepts), Mocha/Chai Overview

1. Jest
Developed by Facebook — most common in React/Angular projects.

- Features:
  - Built-in assertions (expect)
  - Snapshot testing
  - Mocking utilities
  - Parallel test running

- Command: npx jest

2. Mocha + Chai
- Mocha: Test runner — defines test structure and runs them.
- Chai: Assertion library — provides expect, should, assert.

Example:
```
const { expect } = require('chai');
describe('Math', () => {
  it('should add correctly', () => {
    expect(2 + 3).to.equal(5);
  });
});

```

## 10.3 DOM Testing with Testing Library (User-Focused Tests)

Focus on how the user interacts, not on implementation details.

- Tools: @testing-library/react, @testing-library/angular, etc.
Principles:
  - Test the DOM as a real user would see it.
  - Avoid testing internal props or methods.

Example (React):
```
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders and clicks button', () => {
  render(<Button label="Save" />);
  const btn = screen.getByText('Save');
  fireEvent.click(btn);
  expect(btn).toBeEnabled();
});

```

---

## 10.4 Mocking, Spies, and Stubs

Mocking: Replace real function/API with fake version for isolation.
Example: mock API calls.
Spy: Observe how a function was called (arguments, count, etc.)
Stub: Predefine a function’s behavior (return a fixed result).

Example (Jest):
```
const api = { fetchData: jest.fn(() => 'mock data') };
test('uses mock data', () => {
  expect(api.fetchData()).toBe('mock data');
  expect(api.fetchData).toHaveBeenCalled();
});

```

---

## 10.5 End-to-End Testing (Cypress, Playwright) — Basic Flows

- Simulate real user behavior from browser to backend.
- Test entire workflow (login → navigate → perform action → logout).

Cypress
- Easy setup, real browser execution, visual runner.
- Example:
```
describe('Login Flow', () => {
  it('logs in successfully', () => {
    cy.visit('/login');
    cy.get('input[name=email]').type('user@test.com');
    cy.get('input[name=password]').type('123456');
    cy.get('button').click();
    cy.url().should('include', '/dashboard');
  });
});

```
Playwright
- Modern cross-browser tool from Microsoft.
- Supports headless, multi-tab, and cross-device testing.

---

## 10.6 Linters & Formatters: ESLint, Prettier, Editor Integration

- ESLint: Enforces code style and catches syntax errors.
Example rule: "no-unused-vars": "warn"

- Prettier: Automatically formats code consistently.
Integration:
Install extensions in VS Code.
Configure "formatOnSave": true.
Use .eslintrc.js and .prettierrc for project rules.

- Command:
```
npx eslint . --fix
npx prettier --write .

```

## Main Software Testing Types

1. Unit Testing

- Tests: Smallest piece of code — function, class, or component.
- Goal: Verify individual logic works correctly.
- Tools: Jest, Mocha, Jasmine, Karma.
- Example: Checking if sum(2,3) returns 5.

2. Integration Testing

- Tests: How multiple units work together.
- Goal: Ensure combined modules (e.g., API + UI) behave correctly.
- Tools: Jest (integration setup), Mocha, Supertest.
- Example: Testing if your login form correctly calls the backend API.

3. Functional Testing

- Tests: System functions as per requirements.
- Goal: Does each feature (button, form, workflow) behave as expected
- Tools: Selenium, Cypress, Playwright.
- Example: Clicking “Submit” creates a new user account.

4. End-to-End (E2E) Testing

- Tests: The entire application flow (user → database → response).
- Goal: Mimic real user actions from start to end.
- Tools: Cypress, Playwright, TestCafe.
- Example: A user logs in → browses → adds to cart → logs out.

5. UI / DOM Testing

- Tests: What appears on the screen and how users interact.
- Goal: Ensure visual and interactive elements behave correctly.
- Tools: Testing Library, Cypress Component Test, Puppeteer.
- Example: Test if clicking a button updates the DOM.

6. Smoke Testing

- Tests: Basic checks to confirm main features work after new changes.
- Goal: “Does it start and run?” — quick validation.
- Example: Check that the homepage loads and major buttons respond.

7. Regression Testing

- Tests: Ensure new code hasn’t broken existing features.
- Goal: Catch bugs introduced by updates or refactoring.
- Tools: Jest snapshots, automated suites (Cypress).
- Example: After updating API, confirm the old login flow still works.

8. Performance Testing

- Tests: How fast and stable the system is under load.
- Goal: Identify performance bottlenecks.
- Tools: JMeter, k6, Lighthouse.
- Example: Does the app handle 1000 users without slowing down?

9. Security Testing

- Tests: Vulnerabilities and data protection.
- Goal: Prevent attacks (XSS, SQL injection).
- Tools: OWASP ZAP, Burp Suite.
- Example: Input fields reject dangerous code.

10. Accessibility Testing (A11y)

- Tests: Whether users with disabilities can use your app.
- Goal: Ensure compliance with WCAG standards.
- Tools: axe-core, Lighthouse, Pa11y.
- Example: Screen readers correctly read all buttons and labels.

11. Cross-Browser / Cross-Device Testing

- Tests: Compatibility across browsers and devices.
- Tools: BrowserStack, Sauce Labs.
- Example: Check if layout works on Chrome, Safari, and mobile screens.

12. Snapshot Testing

- Tests: Component’s rendered output (DOM or HTML snapshot).
- Goal: Detect unexpected UI changes.
- Tools: Jest.
- Example: “Did the button’s HTML change after code update?”

13. Acceptance Testing (UAT)

- Tests: Final verification by users or stakeholders.
- Goal: Ensure product meets business requirements.
- Tools: Manual or automated (Cucumber, Behave).
- Example: Client confirms that the order process matches expectations.


| Category          | Needed?       | Tool Suggestion        |
| ----------------- | ------------- | ---------------------- |
| Unit Tests        | ✅ Must        | Jest / Jasmine         |
| Integration Tests | ✅ Should      | Jest + Testing Library |
| E2E Tests         | ✅ Basic flows | Cypress                |
| Lint & Format     | ✅ Always      | ESLint + Prettier      |


1. Unit Tests (Mandatory)

Why: Catch logic errors early — cheap and fast to run.

What to test:
Utility functions (e.g. formatDate, calculateTotal)
Component logic (e.g. input validation, small conditional rendering)

Tools: Jest or Karma + Jasmine (for Angular)

Example
```
test('adds numbers correctly', () => {
  expect(sum(2, 3)).toBe(5);
});

```

2. Integration Tests (Highly Recommended)

Why: Ensures multiple modules (API + UI + store) work together.
What to test:
Component interacting with services (HTTP requests, store updates)
Form submission + data update

Tools: Jest + Testing Library / Angular Testing Library

Example: Check if submitting a form triggers API call correctly.


3. End-to-End (E2E) Tests (Basic Flow Only)

Why: Confirm that your core user flows (like login, save, checkout) actually work in the browser.

What to test:
Login → Dashboard
Add item → Save → Confirm

Tools: Cypress or Playwright

Tip: You don’t need 100% coverage — just critical paths.