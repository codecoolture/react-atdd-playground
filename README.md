<h1 align="center">
  React ATDD Playground (with Next.js) 🎈
</h1>

Here you may find a template with a working project skeleton to (deliberate) practice your test-driven development skills (or _just_ front-end testing or front-end development in general).

## What's in the box?

- [**Cypress**](https://cypress.io): an acceptance testing framework to do browser testing, using JavaScript.
- [**Testing Library Suite**](https://testing-library.com/): a complete set of tools to do unitary/integration testing at the component level.
  - [**`@testing-library/cypress`**](https://testing-library.com/docs/cypress-testing-library/intro): this provides Cypress with Testing Library-like queries to access the DOM.
  - [**`@testing-library/react`**](https://testing-library.com/docs/react-testing-library/intro): bridge to make React components to work with Testing Library.
  - [**`@testing-library/jest-dom`**](https://testing-library.com/docs/ecosystem-jest-dom): this expands the set of default matchers from Jest to be more DOM-friendly.
  - [**`@testing-library/user-event`**](https://testing-library.com/docs/ecosystem-user-event): utility library to make it easier to reproduce browser-like interactions (such as `user.type` or `user.click`).

## How to play?

First, you will need to install the required dependencies. They can be all automatically installed by using `yarn`:

```sh
$ yarn install
```

Then, there are available 3 yarn scripts to execute different parts of the test suite:

```sh
$ yarn test:all # it will run all the tests
$ yarn test:acc # it will run only the Cypress test suite
$ yarn test:unit # it will run only the Jest & Testing Library test suite
```
