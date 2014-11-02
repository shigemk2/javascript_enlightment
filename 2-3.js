// http://jsfiddle.net/jseja/HJuFe/
// 配列を使って擬似的な多次元配列を生成

var myArray = [[[]]]; // 空の配列に空の配列を持った空の配列

// 関数を使ったカプセル化の例。空の関数の中に空の関数を持った空の関数
var myFunction = function() {
  // 空
  var myFunction = function() {
    // 空
    var myFunction = function() {
      // 空
    };
  };
};

// オブジェクトと配列をごちゃごちゃに混ぜてから取り出すことも可能
var foo = [{
  foo : [{
    bar: {
      say :function() {
        return 'hi';
      }
    }
  }]
}];

console.log(foo[0].foo[0].bar.say()); // hi
