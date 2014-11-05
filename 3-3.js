// http://jsfiddle.net/jseja/YDBT9
/* Object()コンストラクタを使って、文字列、数値、配列、関数、真偽値、正規表現オブジェクトを生成 */
/* 実際にこのような操作をする機会は全くないが、ここではこのような操作も可能であることを実証している */
console.log(new Object('foo'));
console.log(new Object(1));
console.log(new Object([]));
console.log(new Object(function() {}));
console.log(new Object(true));
console.log(new Object(/\bt[a-z]+\b/));

console.log(typeof new Object('foo'));
console.log(typeof new Object(1));
console.log(typeof new Object([]));
console.log(typeof new Object(function() {}));
console.log(typeof new Object(true));
console.log(typeof new Object(/\bt[a-z]+\b/));
