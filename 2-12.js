// http://jsfiddle.net/jseja/pVTw3
// myArrayとArray.prototypeはtoLocaleString()メソッドを持っていない
var myArray = ['foo', 'bar'];

// toLocaleString()はObject.prototype.toLocaleStringで定義されている
console.log(myArray.toLocaleString());
