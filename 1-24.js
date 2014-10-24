// http://jsfiddle.net/jseja/K5Ndz/
var myNumber = new Number('23');
var myNumberL = 23; // リテラル宣言
var myString = new String('male');
var myStringL = 'male'; // リテラル宣言
var myBoolean = new Boolean('true');
var myBooleanL = true; // リテラル宣言
var myObject = new Object();
var myObjectL = {}; // リテラル宣言
var myArray = new Array();
var myArrayL = []; // リテラル宣言
var myFunction = new Function();
var myFunctionL = function() {}; // リテラル宣言
var myDate = new Date();
var myRegExp = new RegExp('/./');
var myRegExpL = /./; // リテラル宣言
var myError = new Error();

console.log( // すべてtrueを返す
  myNumber.constructor === Number,
  myNumberL.constructor === Number,
  myString.constructor === String,
  myStringL.constructor === String,
  myBoolean.constructor === Boolean,
  myBooleanL.constructor === Boolean,
  myObject.constructor === Object,
  myObjectL.constructor === Object,
  myArray.constructor === Array,
  myArrayL.constructor === Array,
  myFunction.constructor === Function,
  myFunctionL.constructor === Function,
  myDate.constructor === Date,
  myRegExp.constructor === RegExp,
  myRegExpL.constructor === RegExp,
  myError.constructor === Error
);
