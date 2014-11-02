// http://jsfiddle.net/jseja/MTApU
/* JavaScriptはmyArray.fooが存在しないことを確認後、次にArray.prototype.fooを探す。しかしこのプロパティも存在しないため、次にObject.prototype.fooを探す。これも存在しないため、undefinedを返す。 */

var myArray = [];
Object.prototype.foo=function(val){
    return 'fuga';
};
Array.prototype.foo=function(val){
    return 'hoge';
};
console.log(myArray.foo()); // この場合hogeを返す
console.log(myArray.foo); // この場合hogeを返す

