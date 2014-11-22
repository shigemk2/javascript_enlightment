// http://jsfiddle.net/jseja/PY4fU/
// function(){ console.log('hi'); }; // 無名関数式
// 無名関数を実行するための関数
var sayHi = function(f) {
  f(); // 引数として渡された関数を実行 - 引数は関数である必要がある
}

sayHi(function() { console.log('hi'); });
