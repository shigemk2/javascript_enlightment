// http://jsfiddle.net/jseja/6Xyh3/
var a = 10; // グローバル変数
b = 100; // グローバルプロパティ

delete a; // aはdeleteで削除できない
delete b; // bはここで削除される

console.log(a); // aはdeleteで消すことができないのでaの内容が出力される
// console.log(b); // b is not defined
