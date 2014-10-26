// http://jsfiddle.net/jseja/C4bxp
// instanceof演算子を使って、あるオブジェクトが特定のコンストラクタ関数のインスタンスかどうかを判定することができます
var CustomConstructor = function() { this.foo = 'bar'; };

// CustomConstructorのインスタンスを生成
var instanceOfCustomObject = new CustomConstructor();

console.log(instanceOfCustomObject instanceof CustomConstructor);

// ネイティブオブジェクトも同様に動作
console.log(new Array('foo') instanceof Array);
