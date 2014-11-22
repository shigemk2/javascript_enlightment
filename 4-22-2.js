// http://jsfiddle.net/jseja/544JT
// 無名関数で再帰
(function (num) { // 関数名を指定した関数式（4.13を参照）
  console.log(num);
  num--; // カウントダウン値を変更
  if (num < 0){return false;} // numが0以下の場合、再帰せず終了
  arguments.callee(num);
})(5);

// 出力：5,4,3,2,1,0
