// http://jsfiddle.net/jseja/APyu9
var add = function(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return 'pass in numbers'; // 引数が数値でない場合にメッセージを返す
  }
  return x + y;
};
console.log(add(3,3));
console.log(add('2','2'));
