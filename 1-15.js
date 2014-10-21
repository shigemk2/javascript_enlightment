// http://jsfiddle.net/jseja/PUqbG/
var price1 = 10;
var price2 = 10;
var price3 = new Number('10'); // newを使用して数値オブジェクトを生成
var price4 = price3;

console.log(price1 === price2); // 出力：true

/* 出力：false
price1はプリミティブ型数値であり、price3は数値オブジェクトであるため */
console.log(price1 === price3);

/* 出力：true
オブジェクトは、その値そのものではなく参照によって比較されるため */
console.log(price4 === price3);

// price4にプリミティブ値を与える
price4 = 10;

console.log(price4 === price3); // 出力：false - price3はオブジェクト、price4はプリミティブ型なので同値ではない
console.log(price4 == price3); // 出力：true - ただし、等値（==）とみなされる
