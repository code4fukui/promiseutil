# promiseutil

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A lightweight, zero-dependency utility library to non-blockingly check the status of a JavaScript Promise.

## Usage & Example

Import the functions directly from the module URL in Deno, browsers, or other modern JavaScript runtimes:

```javascript
import { isFinished, isResolved, isRejected } from "https://code4fukui.github.io/promiseutil/promiseutil.js";
```

The following example demonstrates how to use `isFinished` to poll a promise's status without blocking the event loop.

```javascript
import { sleep } from "https://js.sabae.cc/sleep.js";
import { isFinished } from "https://code4fukui.github.io/promiseutil/promiseutil.js";

// A promise that will resolve in 1 second
const p = sleep(1000);

// Poll the promise status every 100ms
for (let i = 0; i < 20; i++) {
  // isFinished returns a promise that resolves immediately
  // with the current status of 'p'.
  console.log(`Poll ${i}: finished?`, await isFinished(p));
  await sleep(100);
}
```

This will output `false` for approximately the first second, and then `true` once the promise has settled.

## API

All functions are non-blocking. They check the state of a given promise and return a new `Promise<boolean>` that resolves on the next tick to the result of the check.

### `isFinished(p)`

Returns a promise that resolves to `true` if the promise `p` has settled (either resolved or rejected), and `false` otherwise.

### `isResolved(p)`

Returns a promise that resolves to `true` if the promise `p` has successfully resolved, and `false` otherwise.

### `isRejected(p)`

Returns a promise that resolves to `true` if the promise `p` has been rejected, and `false` otherwise.

*Note: If the input `p` is not a promise (e.g., `null` or `undefined`), all functions return a promise that resolves to `false`.*

## License

This project is licensed under the terms of the [LICENSE](LICENSE) file.