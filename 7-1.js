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

//  ローカルスコープ（関数スコープ）とevalスコープはいくつでも作ることができますが、グローバルスコープはひとつのJavaScript環境にひとつしか存在しません。
// 関数を入れ子にすると、実行スコープのスタックを生成します。これらのスタックは連鎖し、入れ子の外側の関数で定義された変数には入れ子の内側からアクセスすることが可能となります。したがって、グローバルスコープ（入れ子の一番外側）で定義された変数にはどこからでもアクセスすることが可能です。また、この連鎖スコープをスコープチェーンと呼びます
