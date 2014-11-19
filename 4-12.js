// http://jsfiddle.net/jseja/mq5UU
var myFunction = function(foo) {
  arguments[0] = 'xyz'; // fooの位置に渡された引数を操作
  console.log(foo, arguments[0]); // fooとarguments[0]の値が両方とも'xyz'
  foo = 'foo'; // fooを直接操作する
  console.log(foo, arguments[0]); // fooとarguments[0]の値が両方とも'xyz'

  var arg1 = arguments[1]; // この例では渡されない引数

  arguments[1] = '123'; // 渡されていない場所の引数を編集

  console.log(arg1, arguments[1]); // 渡されていない引数はundefinedだがargument[1]は編集されている
};

myFunction('abc');
