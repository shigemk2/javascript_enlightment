// http://jsfiddle.net/jseja/qcfED/
var Person = function(living, age, gender) {
  this.living = living;
  this.age = age;
  this.gender = gender;
  this.getGender = function() {
    return this.gender;
  };
};

var cody = new Person(true, 33, 'male');
console.log(cody);
var lisa = new Person(true, 34, 'female');
console.log(lisa);
