// http://jsfiddle.net/jseja/cjXax/
var cody = {}; // プロパティを持たない空のオブジェクトを生成（var cody = new Object();と同等）
for (key in cody) { // codyオブジェクトが空のオブジェクトであることを確認
  if (cody.hasOwnProperty(key)) {
    console.log(key); // codyはプロパティを持たないので、何も出力されない
  }
}
var cody1 = {foo: "bar"};
for (key in cody1) {
  if (cody1.hasOwnProperty(key)) {
    console.log(key);
  }
}
