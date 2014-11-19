// http://jsfiddle.net/jseja/vEcxt
// 関数コンストラクタ：最後のパラメータには関数のロジック（関数本体）が入る
// この方法が実際に使われることはない
var addConstructor = new Function('x', 'y', 'return x + y');

// 関数宣言(function文)
function addStatement(x, y) {
  return x + y;
}

// 関数式
var addExpression = function(x, y) {
  return x + y;
}

// 関数式（関数名指定：関数内で関数自身を指定する場合に使用。4.21を参照。）
var addNamedExpression = function
addNamedExpression(x, y) {
  return x + y;
};

// 全て4を出力
console.log(addConstructor(2,2), addStatement(2,2), addExpression(2,2), addNamedExpression(2,2));
