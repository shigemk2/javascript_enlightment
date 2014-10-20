//http://jsfiddle.net/jseja/tMQKP
var myNumber          = new Number(23); // 数値オブジェクト（実際のコーディングでは非推奨）
var myNumberLiteral   = 23; // オブジェクトではなく、プリミティブ型

var myString          = new String('male'); // 文字列オブジェクト（実際のコーディングでは非推奨）
var myStringLiteral   = 'male'; // オブジェクトではなく、プリミティブ型

var myBoolean         = new Boolean(false); // 真偽値オブジェクト（実際のコーディングでは非推奨）
var myBooleanLiteral  = false; // オブジェクトではなく、プリミティブ型

var myObject          = new Object();
var myObjectLiteral   = {};

var myArray           = new Array('foo', 'bar');
var myArrayLiteral    = ['foo', 'bar'];

var myFunction        = new Function("x", "y", "return x*y");
var myFunctionLiteral = function(x, y) {return x*y;};

var myRegExp          = new RegExp('\bt[a-z]+\b');
var myRegExpLiteral   = /\bt[a-z]+\b/;

// リテラルで生成した値が、newで生成した値と同じコンストラクタで生成されていることを確認
console.log(myNumber.constructor,   myNumberLiteral.constructor);
console.log(myString.constructor,   myStringLiteral.constructor);
console.log(myBoolean.constructor,  myBooleanLiteral.constructor);
console.log(myObject.constructor,   myObjectLiteral.constructor);
console.log(myArray.constructor,    myArrayLiteral.constructor);
console.log(myFunction.constructor, myFunctionLiteral.constructor);
console.log(myRegExp.constructor,   myRegExpLiteral.constructor);
