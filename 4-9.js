// http://jsfiddle.net/jseja/7EKk9/
var foo = function foo() {
    console.log(arguments.callee); // 出力：この関数の内容
    // arguments.callee()でfoo()を再帰的に実行することができる
}();
