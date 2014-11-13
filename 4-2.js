// http://jsfiddle.net/jseja/V6s58/
/* 不特定の数の引数に続いて、最後に関数の本体を文字列として渡し関数を生成する */
var addFunction = new Function('num1', 'num2', 'return num1 + num2');

/* 上記の代わりに、カンマ区切りの文字列ですべての引数をまとめることも可能 */
var timesFunction = new Function('num1, num2', 'return num1 * num2');

console.log(addFunction(2,2), timesFunction(2,2)); // 4 4

// 一般的に、Function()コンストラクタを直接使用することは推奨されておらず、通常この方法での関数生成は行われません。その理由は、JavaScriptはeval()を使って関数本体を解析するからです。eval()の実行は多くの場合に無駄なオーバーヘッドとして認識されています。もしコード内でFunction()コンストラクタが使われている場合は、設計を見なおした方が良いでしょう
