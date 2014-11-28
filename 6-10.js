// http://jsfiddle.net/jseja/xZ4tP
var Person = function(name) {
  this.name = name || 'john doe'; // thisは生成されるインスタンス
}

var cody = new Person();
console.log(cody.name);
var cody = new Person('Cody Lindley');
console.log(cody.name);
