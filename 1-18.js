// http://jsfiddle.net/jseja/eHgmt
var myObject = {};
var copyObMyObject = myObject; // 値が渡されるのではなく、参照が渡される
myObject.foo = 'bar';          // myObjectを操作

/* ここでmyObjectとcopyOfMyObjectの内容を出力すると、両方がfooオブジェクトを保持している。これらの変数は同じオブジェクトを参照しているため。 */

console.log(myObject, copyObMyObject);
