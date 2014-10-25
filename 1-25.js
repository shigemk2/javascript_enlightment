// http://jsfiddle.net/jseja/PXLXN
var CustomConstructor = function CustomConstructor() {
  return 'Wow!';
};
var instanceofCustomObject = new
CustomConstructor();

console.log(instanceofCustomObject.constructor === CustomConstructor);

// CustomConstructor()関数へのリファレンスを返す
console.log(instanceofCustomObject.constructor);


















