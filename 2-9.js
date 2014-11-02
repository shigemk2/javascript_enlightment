// http://jsfiddle.net/jseja/MTApU
var myArray = [];
console.log(myArray.foo); // undefined

/* JavaScriptはmyArray.fooが存在しないことを確認後、次にArray.prototype.fooを探す。しかしこのプロパティも存在しないため、次にObject.prototype.fooを探す。これも存在しないため、undefinedを返す。 */
