// http://jsfiddle.net/jseja/CyEdb
var foo = { bar: 'bar' };
// foo += { bar: 'bar' };
foo.hoge=  'bar';
console.log('bar' in foo); // true
delete foo.bar;
console.log('bar' in foo); // false

// delete演算子は指定されたオブジェクトのプロパティのみを削除します。プロトタイ
// プチェーンで継承するプロパティを削除しません。

// delete演算子はオブジェクトからプロパティの存在を消す唯一の方法です。プロパ
// ティの値にundefinedやnullを設定しても、それはプロパティの値を変更すること
// にすぎず、オブジェクトからプロパティの存在自体を削除しているわけではありませ
// ん。

// delete演算子はvarで宣言した変数やfunction文で宣言した関数には適用されません

// delete演算子で配列の要素を削除することもできます。その場合、指定した配列の要
// 素はundefinedになり、lengthは維持されます
