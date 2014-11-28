// http://jsfiddle.net/jseja/HFd7C
var myObject = {};

var myFunction = function(param1, param2) {
  // 後にapply()で呼ばれる際、thisはmyObjectを参照
  this.foo = param1;
  this.bar = param2;
  console.log(this); // 出力：Object {foo = 'foo', bar = 'bar'}
};

myFunction.apply(myObject, ['foo', 'bar'] ); // myObjectをthisとしてmyFunctionを呼ぶ
console.log(myObject);
myFunction.apply(myObject, ['hoge', 'fuga'] );
console.log(myObject);
