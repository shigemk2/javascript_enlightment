// http://jsfiddle.net/jseja/FRhqM
// プロトタイプチェーンを辿ってObject.prototype.fooの値を出力
Object.prototype.foo = 'foo';

var myString = "empty string";

console.log(myString.foo); // foo
