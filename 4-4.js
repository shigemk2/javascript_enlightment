// http://jsfiddle.net/jseja/AzWVW/
// 戻り値がなかったらundefinedを返す
var yelp = function() {
  console.log('I am yelping!');
}

console.log(yelp() === undefined); // true
// すべての関数は常に値を返します。return文を記述しない場合や、return文で戻り値を明示的に指定していない場合に返される値はundefinedです
