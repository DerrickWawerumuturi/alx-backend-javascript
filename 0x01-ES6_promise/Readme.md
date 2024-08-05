# ES6 Promises

This project contains tasks for learning to use Promises in ECMAScript 2015 (ES6).

## Tasks To Complete

### 0. Keep every promise you make and only make promises you can keep
`0-promise.js` contains a script that exports a function with the prototype `function getResponseFromAPI()`, which returns a Promise.

### 1. Don't make a promise...if you know you can't keep it
`1-promise.js` contains a script that exports a function with the prototype `getFullResponseFromAPI(success)`, which returns a Promise. The parameter (`success`) is a boolean.

- When the argument is:
  - `true`
    - Resolve the promise by passing an object with 2 attributes:
      - `status: 200`
      - `body: 'Success'`
  - `false`
    - Reject the promise with an error object with the message `The fake API is not working currently.`

### 2. Catch me if you can!
`2-then.js` contains a script that exports a function with the prototype `function handleResponseFromAPI(promise)`, which appends three handlers to the promise argument.

- When the Promise resolves, return an object with the following attributes:
  - `status: 200`
  - `body: 'success'`
- When the Promise rejects, return an empty Error object.
- For every resolution, log `Got a response from the API` to the console.

### 3. Handle multiple successful promises
`3-all.js` contains a script that meets the following requirements.

- Import `uploadPhoto` and `createUser` from `utils.js`.
- Use the prototype below to collectively resolve all promises and log `body firstName lastName` to the console. The functions in `utils.js` return Promises.
  ```javascript
  function handleProfileSignup()

