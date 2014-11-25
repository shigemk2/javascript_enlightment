// http://jsfiddle.net/jseja/b5yDY
var myObject = {
  func1: function() {
    console.log(this); // myObject
    var func2 = function() {
      console.log(this); // window
      var func3 = function() {
        console.log(this); // window
      }();
    }();
  }
};
myObject.func1();
