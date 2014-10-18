// http://jsfiddle.net/jseja/n8RNk
var myObject = new Object(); // Object()オブジェクトを生成

// ブラケット記法でmyObjectの0,1,2の各プロパティに文字を代入
myObject['0'] = 'f';
myObject['1'] = 'o';
myObject['2'] = 'o';
console.log(myObject); // { '0': 'f', '1': 'o', '2': 'o' }

var myString = new String('foo'); // String()オブジェクトを生成(通常この方法では文字列を生成することはない)
console.log(myString); // { '0': 'f', '1': 'o', '2': 'o' }
