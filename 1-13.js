// コンストラクタ関数にnew演算子を付与していないことに留意してください。
// プリミティブ値を生成する際は、オブジェクトは生成されない
var primitiveString1  = "foo";
var primitiveString2  = String("foo");
var primitiveNumber1  = 10;
var primitiveNumber2  = Number(10);
var primitiveBoolean1 = true;
var primitiveBoolean2 = Boolean('true');

// confirm the typeof is not object
console.log(typeof primitiveString1, typeof primitiveString2);
console.log(typeof primitiveNumber1, typeof primitiveNumber2);
console.log(typeof primitiveBoolean1, typeof primitiveBoolean2);

// new演算子とともにコンストラクタを実行するとオブジェクトが生成されます。

var myNumber   = new Number(23);
var myString   = new String('male');
var myBoolean  = new Boolean(false);
var myObject   = new Object();
var myArray    = new Array('foo', 'bar');
var myFunction = new Function("x", "y", "return x * y");
var myDate     = new Date();
var myRegExp   = new RegExp('\\bt[a-z]+\\b');
var myError    = new Error('Crap!');

// 下記の出力：'object object object object object function object function object'
console.log(
typeof myNumber,
typeof myString,
typeof myBoolean,
typeof myObject,
typeof myArray,
typeof myFunction, // すべての関数オブジェクトに対して、typeof演算子はfunctionを返します
typeof myDate,
typeof myRegExp, // RegExp()オブジェクトに対して、typeof演算子はfunctionを返します
typeof myError
);
