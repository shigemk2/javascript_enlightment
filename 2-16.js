// http://jsfiddle.net/jseja/VEk5j/
var cody = {
  age : 33,
  gender : 'male'
};

for (var key in cody) {
  if (cody.hasOwnProperty(key)) {
    console.log(key);
  }
}










