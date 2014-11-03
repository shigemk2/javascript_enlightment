// http://jsfiddle.net/jseja/VEk5j/
var cody = {
  age : 33,
  gender : 'male'
};

for (var key in cody) {
  if (cody.hasOwnProperty(key)) { // // keyはループ内でそれぞれのプロパティ名を格納する変数
    // プロトタイプチェーンから継承されたプロパティを除く
    console.log(key);
  }
}










