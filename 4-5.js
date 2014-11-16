// http://jsfiddle.net/jseja/7yTht/
// 関数は、変数（funcA）、配列（funcB）、そしてオブジェクト（funcC）に格納できる
var funcA = function() {}; // funcA()で関数を呼ぶ
var funcB = [function() {}]; // funcB[0]で関数を呼ぶ
var funcC = {method: function(){}}; // funcC.method()もしくはfuncC['method']()で関数を呼ぶ

// 関数は引数として関数に渡したり、戻り値にすることができる
var funcD = function(func) {
  return func;
};

var runFuncPassedToFuncD = funcD(function() {console.log('Hi');});

runFuncPassedToFuncD(); // Hi

// 関数はオブジェクト つまりプロパティを持つこともできる
var funcE = function(){};
funcE.answer = 'yup'; // インスタンスプロパティ
console.log(funcE.answer); // yup

// 第一級関数とは第一級オブジェクトとして扱うことのできる関数で、第一級オブジェクトは以下のような性質を持ちます。
// ● 変数やデータ構造に格納することができる
// ● サブルーチン（関数やプロシージャ）のパラメータとして渡すことができる
// ● サブルーチン（関数やプロシージャ）の戻り値となることができる
// ● 実行時に構築することができる
// ● 独自の存在を持つ（名前に依らない存在である）
// JavaScriptオブジェクトは第一級オブジェクトです。http://ja.wikipedia.org/wiki/第一級関数 を併せて参照してください
