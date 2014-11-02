// http://jsfiddle.net/jseja/CyEdb
var foo = { bar: 'bar' };
// foo += { bar: 'bar' };
foo.hoge=  'bar';
console.log('bar' in foo); // true
delete foo.bar;
console.log('bar' in foo); // false
