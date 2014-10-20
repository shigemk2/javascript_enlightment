// new演算子を使ってネイティブコンストラクタからインスタンスを作成
var myNumber   = new Number(23);
var myString   = new String('male');
var myBoolean  = new Boolean(false);
var myObject   = new Object();
var myArray    = new Array('foo', 'bar');
var myFunction = new Function("x", "y", "return x*y");
var myDate     = new Date();
var myRegExp   = new RegExp('\bt[a-z]+\b');
var myError    = new Error('うわっ');

// これらのコンストラクタがオブジェクトを生成したかどうかを出力して確認
console.log(myNumber.constructor); // 出力：Number()
console.log(myString.constructor); // 出力：String()
console.log(myBoolean.constructor); // 出力：Boolean()
console.log(myObject.constructor); // 出力：Object()
console.log(myArray.constructor); //出力：Array() （モダンブラウザのみ。Objectを出力するブラウザも存在した。）
console.log(myFunction.constructor); //出力：Function()
console.log(myDate.constructor); // 出力：Date()
console.log(myRegExp.constructor); // 出力：RegExp()
console.log(myError.constructor); // 出力：Error()




















