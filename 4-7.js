// http://jsfiddle.net/jseja/a5hkq
var myObject1 = {
  name: 'myObject1',
  myMethod: function() { console.log(this.name); }
};

myObject1.myMethod();

var myObject2 = function() { console.log(this); };
// thisはグローバルオブジェクト
myObject2();

var myObject3 = function() { console.log(arguments); };
myObject3('hoge', 'fuga', 'bar'); // { '0': 'hoge', '1': 'fuga', '2': 'bar' }
