// http://jsfiddle.net/jseja/qPTk9
// Object()コンストラクタを使ってcodyAを生成
var codyA = new Object();
codyA.living = true;
codyA.age = 33;
codyA.gender = 'male';
codyA.getGender = function() {
  return codyA.gender;
};

console.log(codyA); // { living: true, age: 33, gender: 'male', getGender: [Function] }

/* 次の例では、上の例と同じオブジェクトを生成しますが、次はObject()コンストラクタで一度きりのcodyを生成するのではなく、最初にcodyオブジェクト（もしくは他のPersonオブジェクト）を生成するPerson()コンストラクタを定義しnewを使ってインスタンス化します。 */

var Person = function(living, age, gender) {
  this.living = living;
  this.age = age;
  this.gender = gender;
  this.getGender = function() { return this.gender; };
};

var codyB = new Person(true, 33, 'male');

console.log(codyB); // { living: true, age: 33, gender: 'male', getGender: [Function] }










