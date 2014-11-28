// http://jsfiddle.net/jseja/G3kJp
var myObject = {};

var myFunction = function(param1, param2) {
  // 後でcall()で呼ばれるときにthisはmyObjectを参照
  this.foo = param1;
  this.bar = param2;
  console.log(this); // 出力: Object { foo = 'foo', bar = 'bar' }
};

myFunction.call(myObject, 'foo', 'bar'); // myFunction.call(myObject, 'foo', 'bar'); // myObjectをthisとしてmyFunctionを呼ぶ
console.log(myObject); // 出力: Object { foo = 'foo', bar = 'bar' }
myFunction.call(myObject, 'hoge', 'fuga');
console.log(myObject);
myFunction.call(myObject, ['hoge', 'fuga']);
