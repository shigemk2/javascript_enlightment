// http://jsfiddle.net/jseja/b87Ud
var myObject = {};

// myObjectの内部にプロパティを追加

myObject.myFunction  = function () {};
myObject.myArray     = [];
myObject.myString    = 'string';
myObject.myNumber    = 33;
myObject.myDate      = new Date();
myObject.myRegExp    = /a/;
myObject.myNull      = null;
myObject.myUndefined = undefined;
myObject.myObject    = {};
myObject.myMath_PI   = Math.PI;
myObject.myError     = new Error('Error!');

// 上記で設定したそれぞれの値を出力
console.log(myObject.myFunction);
console.log(myObject.myArray);
console.log(myObject.myString);
console.log(myObject.myNumber);
console.log(myObject.myDate);
console.log(myObject.myRegExp);
console.log(myObject.myNull);
console.log(myObject.myNull);
console.log(myObject.myUndefined);
console.log(myObject.myObject);
console.log(myObject.myMath_PI);
console.log(myObject.myError);

/* すべてのオブジェクトに同様の操作を行うことができる。ここでは関数（Function()オブジェクト）にプロパティを追加。 */
var myFunction = function() {};

myFunction.myFunction = function() {};
myFunction.myArray = [];
myFunction.myString = 'string';
myFunction.myNumber = 33;
myFunction.myDate = new Date();
myFunction.myRegExp = /a/;
myFunction.myNull = null;
myFunction.myUndefined = undefined;
myFunction.myObject = {};
myFunction.myMath_PI = Math.PI;
myFunction.myError = new Error('Error!');

// 上記で設定したそれぞれの値を出力
console.log(myFunction.myFunction);
console.log(myFunction.myArray);
console.log(myFunction.myString);
console.log(myFunction.myNumber);
console.log(myFunction.myDate);
console.log(myFunction.myRegExp);
console.log(myFunction.myNull);
console.log(myFunction.myNull);
console.log(myFunction.myUndefined);
console.log(myFunction.myObject);
console.log(myFunction.myMath_PI);
console.log(myFunction.myError);
