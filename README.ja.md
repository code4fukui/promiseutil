# promiseutil

JavaScriptのPromiseのステータスをノンブロッキングで確認するための、軽量で依存関係のないユーティリティライブラリです。

## 使用方法と例

Deno、ブラウザ、またはその他のモダンなJavaScriptランタイムにおいて、モジュールURLから直接関数をインポートします。

```javascript
import { isFinished, isResolved, isRejected } from "https://code4fukui.github.io/promiseutil/promiseutil.js";
```

以下の例は、イベントループをブロックすることなく、`isFinished` を使用してPromiseのステータスをポーリングする方法を示しています。

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

これにより、最初の約1秒間は `false` が出力され、Promiseが確定（settled）した後は `true` が出力されます。

## API

すべての関数はノンブロッキングです。指定されたPromiseの状態を確認し、次のティック（next tick）でその確認結果として解決される新しい `Promise<boolean>` を返します。

### `isFinished(p)`

Promise `p` が確定（解決または拒否）している場合は `true` に、そうでない場合は `false` に解決されるPromiseを返します。

### `isResolved(p)`

Promise `p` が正常に解決（resolve）されている場合は `true` に、そうでない場合は `false` に解決されるPromiseを返します。

### `isRejected(p)`

Promise `p` が拒否（reject）されている場合は `true` に、そうでない場合は `false` に解決されるPromiseを返します。

*注: 入力 `p` がPromiseではない場合（例: `null` や `undefined`）、すべての関数は `false` に解決されるPromiseを返します。*

## ライセンス

このプロジェクトは、[LICENSE](LICENSE) ファイルの条項の下でライセンスされています。
