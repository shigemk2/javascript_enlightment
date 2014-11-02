// http://jsfiddle.net/jseja/8unzr/
var myArray = ['foo', 'bar'];
console.log(myArray.hasOwnProperty('join')); // 出力：false
console.log(myArray.hasOwnProperty('foo')); // 出力：false
console.log(myArray.hasOwnProperty('hasOwnProperty')); // 出力：false
