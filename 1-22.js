// http://jsfiddle.net/jseja/tcWhb
// ビルトインStringコンストラクタ関数にaugmentedPropertiesプロパティを追加
String.augmentedProperties = [];

if (!String.prototype.trimIT) { // prototypeにtrimITプロパティがない場合に追加
    String.prototype.trimIT = function() {
        return this.replace(/^\s+|\s+$/g, ''); // 文字列前後のスペースを除去
    };

    // 'trimIT'文字列をaugmentedProperties配列に追加
    String.augmentedProperties.push('trimIT');
}

// 文字列インスタンスのtrimIt()メソッドを使用
var myString = '  trim me  ';
console.log(myString.trimIT()); // 出力：'trim me'

// Stringオブジェクトに追加されたaugmentedProperties配列にアクセス
console.log(String.augmentedProperties.join()); // 出力：'trimIT'

