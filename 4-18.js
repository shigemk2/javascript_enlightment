// http://jsfiddle.net/jseja/WsqgJ
// 一番広く使われている方法
(function(msg) {
  console.log(msg);
})('Hi');

// 上記と記法が異なるが、同じ結果を得られる
(function(msg) {
  console.log(msg);
}('Hi'));

// コードを一番短く出来る方法
!function sayHi(msg) {console.log(msg);}('Hi');

// これは動作しない！（function文の形では実行不可）
//function sayHi() {console.log('hi');}();

