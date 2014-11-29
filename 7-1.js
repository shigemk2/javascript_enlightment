// http://jsfiddle.net/jseja/AYRqg/
var foo = 0; // グローバル変数
console.log(foo); // 0

var myFunction = function() {
  var foo = 1; // ローカルスコープ
  console.log(foo); // 1

  var myNestedFunction = function() {
    var foo = 2; // ローカルスコープ
    console.log(foo);
  }()

  var myNestedFunctionTwo = function() {
    // ローカルスコープにfooを定義しない
    console.log(foo); // 入れ子の外
  }()
}()

eval('var foo = 3; console.log(foo);'); // evalスコープ

