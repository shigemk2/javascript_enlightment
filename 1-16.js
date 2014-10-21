// http://jsfiddle.net/jseja/TKaQD/
// プリミティブ値を宣言
var myNull            = null;
var myUndefined       = undefined;
var primitiveString1  = "foo";
var primitiveString2  = String('foo');   // new演算子を使っていないのでプリミティブ値となる
var primitiveNumber1  = 10;
var primitiveNumber2  = Number('10');    // new演算子を使っていないのでプリミティブ値となる
var primitiveBoolean1 = true;
var primitiveBoolean2 = Boolean('true'); // new演算子を使っていないのでプリミティブ値となる

// toString()プロパティメソッド（object.prototypeから継承）にアクセスし、プリミティブ値がオブジェクトに一時的に変換されることを実証する

// 出力："foo" "foo"
console.log(primitiveString1.toString(), primitiveString2.toString());

// 出力："10" "10"
console.log(primitiveNumber1.toString(), primitiveNumber2.toString());

// 出力："true" "true"
console.log(primitiveBoolean1.toString(), primitiveBoolean2.toString());
// boolean boolean
console.log(typeof primitiveBoolean1, typeof primitiveBoolean2);
// string string
console.log(typeof primitiveBoolean1.toString(), typeof primitiveBoolean2.toString());

// nullとundefinedは対応する？コンストラクタを持っていないため、オブジェクトに変換されない。以下はエラーになる。
console.log(myNull.toString());
console.log(myUndefined.toString());
