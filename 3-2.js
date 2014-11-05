// http://jsfiddle.net/jseja/qvEFh/
// プロパティを持たない空のオブジェクトを生成
var cody1 = new Object();
var cody2 = new Object(undefined);
var cody3 = new Object(null);
var cody4 = new Object("hoge");

console.log(typeof cody1, typeof cody2, typeof cody3, typeof cody4);
