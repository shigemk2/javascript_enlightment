// あとでPerson()オブジェクトを生成するために、Personコンストラクタを定義
var Person = function(living, age, gender) {
  this.living = living;
  this.age = age;
  this.gender = gender;
  this.getGender = function() { return this.gender; };
};

// Personオブジェクトをインスタンス化し、cody変数に格納する
var cody = new Person(true, 33, 'male');

console.log(cody); // { living: true, age: 33, gender: 'male', getGender: [Function] }

/* JavaScript言語であらかじめ定義されているString()コンストラクタ関数も上記と同様のオブジェクトの生成パターンを持っています。String()の場合コンストラクタ関数はJavaScriptにビルトインされているため、インスタンス化を行うだけで文字列インスタンスを得ることができます。しかし組み込みのコンストラクタ関数を使おうが、Person()のようなカスタムコンストラクタ関数を使おうが、オブジェクトの生成パターンは同じです。 */

// 文字列オブジェクトをインスタンス化し、myString変数に格納
var myString = new String('foo');

console.log(myString); // { '0': 'f', '1': 'o', '2': 'o' }
