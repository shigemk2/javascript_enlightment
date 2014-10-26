// http://jsfiddle.net/jseja/h3uQs/
// どのネイティブコンストラクタのインスタンスであっても同様にインスタンスプロパティを追加できる
// booleanコンストラクタであってもプロパティを追加出来る
var myString = new String();
var myNumber = new Number();
var myBoolean = new Boolean(true);
var myObject = new Object();
var myArray = new Array();
var myFunction = new Function('return 2+2');
var myRegExp = new RegExp('\bt[a-z]+\b');

myString.prop = 'test';
myNumber.prop = 'test';
myBoolean.prop = 'test';
myObject.prop = 'test';
myArray.prop = 'test';
myFunction.prop = 'test';
myRegExp.prop = 'test';

// 出力：'test', 'test', 'test', 'test', 'test', 'test', 'test'
console.log(myString.prop,myNumber.prop,myBoolean.prop,myObject.prop,myArray.prop,myFunction.prop, myRegExp.prop);

// 注意：プリミティブ値にはプロパティを追加できない
var myString = 'string';
var myNumber = 1;
var myBoolean = true;

myString.prop = true;
myNumber.prop = true;
myBoolean.prop = true;

// 出力：undefined, undefined, undefined
console.log(myString.prop, myNumber.prop, myBoolean.prop);
