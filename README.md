# promiseutil

```JavaScript
import { sleep } from "https://js.sabae.cc/sleep.js";
import { isFinished } from "https://code4fukui.github.io/promiseutil/promiseutil.js";

const p = sleep(1000);
for (let i = 0; i < 20; i++) {
  console.log(i, await isFinished(p));
  await sleep(100);
}
```
 
## todo

doc, test
