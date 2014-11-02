// codyというObject()オブジェクトを生成
var cody = new Object();

cody.living    = true;
cody.age       = 33;
cody.gender    = 'male';
cody.getGender = function() { return cody.gender; };

// プロパティを取得
console.log(
  cody.living,
  cody.age,
  cody.gender,
  cody.getGender()
);

cody.living    = false;
cody.age       = 99;
cody.gender    = 'female';
cody.getGender = function() { return 'Gender = ' + cody.gender; };

console.log(cody);

// true 33 'male' 'male'
// { living: false,
//   age: 99,
//   gender: 'female',
//   getGender: [Function] }
