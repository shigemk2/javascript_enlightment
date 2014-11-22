// http://jsfiddle.net/jseja/544JT
var countDownFrom = function countDownFrom(num) { // 関数名を指定した関数式（4.13を参照）
    console.log(num);
    num--; // カウントダウン値を変更
    if (num < 0){return false;} // numが0以下の場合、再帰せず終了
    // 無名関数の場合でも、arguments.callee(num)を使って呼ぶことができる（非推奨）
    countDownFrom(num);
};

countDownFrom(5); // 関数を実行
// 出力：5,4,3,2,1,0
