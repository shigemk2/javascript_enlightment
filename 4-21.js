// http://jsfiddle.net/jseja/RnGSF
// 例1

var speak = function() {
    sayYo(); // sayYo()はまだ定義されていないが、呼び出すことができる
    function sayYo() {console.log('Yo');}
}(); // 即時実行

// 例2

console.log(sum(2, 2)); // まだ定義されていないsum()を呼び出すことができる
function sum(x, y) {return x + y;}

