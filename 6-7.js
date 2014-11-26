// http://jsfiddle.net/jseja/twq8c
var myObject = {
  myProperty : 'I can see the light',
  myMethod : function() {
    var that = this; // this（myObject）への参照をmyMethodスコープに保持
    var helperFunction = function() { // ネストされた子関数
      // thatに親関数のthisの値が保持されているため、myObject.myPropertyにアクセスできる
      console.log(that.myProperty); // 出力：'I can see the light'
      console.log(this); // thisの値そのものは変更されている 出力：window
    }();
  }
}

myObject.myMethod();
