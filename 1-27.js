// http://jsfiddle.net/jseja/x7Amr/
// インスタンスは自身のプロパティを持つことができる
var myArray = new Array(); // 配列インスタンスを生成
myArray.prop = 'test'; // インスタンスにプロパティを追加
myArray.test = 'hoge';

console.log(myArray.prop); // test
console.log(myArray.test); // hoge
