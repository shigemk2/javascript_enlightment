// http://jsfiddle.net/jseja/FRhqM
// プロトタイプチェーンを辿ってObject.prototype.fooの値を出力
Object.prototype.foo = 'foo';

var myString = "empty string";

console.log(myString.foo); // foo


// Object.prototypeに追加したものは、すべてのオブジェクトのプロトタイプチェーンに影響を与え、for-inループでも列挙対象となります。そのため、一般にObject.prototypeを編集することは禁止すべきだとも言われています。
