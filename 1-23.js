// http://jsfiddle.net/jseja/feNEK/
var foo = {};
console.log(foo.constructor === Object); // true
// Object()がfooを生成しているため

console.log(foo.constructor); // [Function: Object]
// Object()コンストラクタ関数が出力される
