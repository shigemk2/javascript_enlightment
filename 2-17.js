// http://jsfiddle.net/jseja/KJcPt
// デフォのNodeはwindowオブジェクトなんか存在しないら
// node 2-17.jsってやってもエラーになる
for (var x in window) {
  console.log(x); // windowオブジェクトの全てのプロパティを列挙
}
