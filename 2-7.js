// http://jsfiddle.net/jseja/V7YnV
var myObject = {'123':'zero','class':'foo'};

// 数値で始まるプロパティ名は不正
// 'class'はJavaScriptの予約語
console.log(myObject['123'], myObject['class']); // 'zero foo'

// ドット表記法ではおなじことはできない
// 次の行のコメントを外して実行するとエラーを出力する
// console.log(myObject.0, myObject.class);

// オブジェクトは他のオブジェクトを格納することができるので、たとえば
// cody.object.object.object.objectや、
// cody['object']['object']['object']['object']
// といった表記に遭遇することもあります。

// オブジェクトは無制限に階層化することができます。

// JavaScriptのオブジェクトはミュータブル（可変）です。つまり、ほとんどのオブ
// ジェクトに対して、いつでも取得・設定・更新を行うことができるということです
