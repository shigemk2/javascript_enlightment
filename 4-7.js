// http://jsfiddle.net/jseja/a5hkq
var myObject1 = {
  name: 'myObject1',
  myMethod: function() { console.log(this.name); }
};

myObject1.myMethod();

var myObject2 = function() { console.log(this); };
// thisはグローバルオブジェクト
myObject2();
