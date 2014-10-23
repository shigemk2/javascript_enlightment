// http://jsfiddle.net/jseja/4UDYr/
var objectFoo = { same: 'same' };
var objectBar = { same: 'same' };

// JavaScriptで同値比較を行う場合、比較対象のオブジェクトが同じ型で同じ値をもっているかどうかは同値の基準とはならない値の基準とはならない
console.log(objectFoo === objectBar);

// オブジェクトが同値とみなされる場合
var objectA = {foo: 'bar'};
var objectB = objectA;

console.log(objectA === objectB); // これらのオブジェクトは同じオブジェクトを参照しているため同値
