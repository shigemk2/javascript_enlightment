// http://jsfiddle.net/jseja/aguR7/
var myString = 'foo'; // プリミティブ型文字列を生成
var myStringCopy = myString; // 値を新しい変数に複製
var myString = null; // myStringに格納されている値を変更

console.log(myString, myStringCopy); // 出力：'null foo'

/* myStringの値はmyStringCopyに複製されました。myStringの値を変更しても
 myStringCopyの値は変更されない */
