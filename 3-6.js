// http://jsfiddle.net/jseja/besWd
// プロパティ名は文字列リテラルの形で指定することもできます。
var cody = {
  'living': true,
  'age': 33,
  'gender': 'male',
  'getGender': function() { return cody.gender; }
};

console.log(cody);
