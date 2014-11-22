// http://jsfiddle.net/jseja/nFtYH
var foo = 'bar'; // fooはグローバルオブジェクト直下に格納されたグローバル変数

var myApp = function() { // 関数はスコープを作ることを思い出して
  var run = function() {
    // fooの値はスコープチェーンをたどって取得される
    console.log(foo);
  }();
}

myApp();
