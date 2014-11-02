// http://jsfiddle.net/jseja/Vdpmw/
var myObject = {foo: 'value'};
console.log(myObject.hasOwnProperty('foo')); // 出力：true

// プロトタイプチェーンから継承したプロパティはfalseを出力
console.log(myObject.hasOwnProperty('toString')); // 出力：false
