// http://jsfiddle.net/jseja/An4Np
// 関数（Function()オブジェクト）は、括弧演算子（()）で実行することのできるプログラムの入れ物です。実行時、括弧演算子内に引数を渡すことができ、渡された引数を関数本体で使用することができます
// Functionコンストラクタ
var addNumbersA = new Function('num1', 'num2', 'return num1 + num2');
console.log(addNumbersA(2,2)); // 4

// 一般的には次の方法での定義が圧倒的多数
// 関数リテラル
var addNumbersB = function(num1, num2) {return num1 + num2;};
console.log(addNumbersB(2, 2)); // 4










