// http://jsfiddle.net/jseja/nFtYH
var myFunction = function() {var foo =  'bar'; }; // fooはmyFunction()のスコープ内

var myApp = function() { // 関数はスコープを作ることを思い出して
  var run = function() {
    try {// スコープチェーンにfooが存在しないためエラーが発生
      console.log(foo);
    } catch(e) {
      console.log(e);
    }
  }();
}

myApp();
// [ReferenceError: foo is not defined]
