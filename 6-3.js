// http://jsfiddle.net/jseja/JxUwf/
var foo = 'foo';
var myObject = { foo: 'I am myObject.foo' };

var sayFoo = function() {
  console.log(this['foo']);
};

// myObjectのsayFooメソッドにsayFoo()関数を与える
myObject.sayFoo = sayFoo;

myObject.sayFoo(); // myObject.sayFoo()内でのthisはmyObjectなので'I am myObject.foo'を出力
sayFoo(); // sayFoo()内でのthisはグローバルオブジェクトなので'foo'を出力
