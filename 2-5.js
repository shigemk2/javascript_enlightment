// http://jsfiddle.net/jseja/EmGUq
var cody = new Object();

cody['living']    = true;
cody['age']       = 33;
cody['gender']    = 'male';
cody['getGender'] = function() { return cody.gender; };

// プロパティを取得
console.log(
  cody['living'],
  cody['age'],
  cody['gender'],
  cody['getGender']() // ()演算子を付与して、メソッドを実行
);

cody['living']    = false;
cody['age']       = 99;
cody['gender']    = 'female';
cody['getGender'] = function() { return 'Gender = ' + cody.gender; };

console.log(cody);

// true 33 'male' 'male'
// { living: false,
//   age: 99,
//   gender: 'female',
//   getGender: [Function] }
