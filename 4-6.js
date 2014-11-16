// http://jsfiddle.net/jseja/ZN7xz
var addFunction = function(number1, number2) {
  var sum = number1 + number2;
  return sum;
};

console.log(addFunction(3, 3)); // 6
console.log(addFunction()); // NaN

// 他の多くのプログラミング言語とは異なり、JavaScriptでは関数にパラメータが設定されていても常にパラメータと同じ数の引数を渡さなくてもかまいません。
// ただし、定義されているパラメータに引数が渡されていない場合、その変数にはundefinedが設定されます。
// そのため、関数本体の記述によっては、パラメータで指定された数の引数を渡さない場合に関数が正常に動作しない可能性があります。

// 定義していないパラメータに引数を渡した場合でも、エラーは起こりません。しかも、すべての関数でアクセス可能なargumentsオブジェクトを通じてこれらの引数にアクセスすることができます

// このあたりがJavaScript特有
