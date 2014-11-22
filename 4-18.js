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
// ECMAScript標準によると、関数をその場で実行する際には実行する関数を括弧に収める必要があります（つまり、関数を式に変更する処理が必要）

