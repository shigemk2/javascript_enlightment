// http://jsfiddle.net/jseja/UwnX7
// コンストラクタ関数=テンプレート、クッキーの抜き型
var cody = new Object();
cody.living = true;
cody.age = 33;
cody.gender = 'male';
cody.getGender = function() {
  return cody.gender;
};
console.log(cody.getGender()); // male
