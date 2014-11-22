// http://jsfiddle.net/jseja/bY3L7
var foo = function() {
  var bar = function() {
    var goo = function() {
      console.log(this);
    }();
  }();
}();
