// http://jsfiddle.net/jseja/tZbTQ/
var myString = 'string';
var myNumber = 10;
var myBoolean = false;
var myNull = null;
var myUndefined = undefined;

console.log(myString, myNumber, myBoolean, myNull, myUndefined);
/* 配列やオブジェクトといった複合型（1.12で詳しく解説）の値は、1つ以上のプリミティブ値もしくはオブジェクトによって構成されており、そのため複数の値を持った複雑なセットになりうることに留意してください。 */

var myObject = {
  myString: 'string',
  myNumber: 10,
  myBoolean: false,
  myNull: null,
  myUndefined: undefined
};

console.log(myObject);

var myArray = ['string', 10, false, null, undefined];
console.log(myArray);



















