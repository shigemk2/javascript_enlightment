// http://jsfiddle.net/jseja/XQvuH
// 関数は関数に渡されて、返されることができる
var foo = function(f) {
  return f;
}

var bar = foo(function() { console.log('Hi');}); // fooの引数として無名関数を渡し、戻り値（関数）を格納

// 呼び出す必要がある
bar();
