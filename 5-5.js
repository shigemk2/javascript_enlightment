// window is undefined
var foo = 'bar';

windowRef1 = window;
windowRef2 = this;

console.log(windowRef1, windowRef2); // windowオブジェクトへの参照を出力
console.log(windowRef1.foo, windowRef2.foo); // 出力：'bar', 'bar'
