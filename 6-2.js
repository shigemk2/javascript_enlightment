// http://jsfiddle.net/jseja/wKEM2
// http://jsfiddle.net/jseja/KbVvW
var cody = {
	living : true,
	age : 33,
	gender : 'male',
	// getGender : function() { return cody.gender; }
	getGender : function() { return this.gender; }
};
// codyの代わりにthisを使う
console.log(cody.getGender()); // 出力：'male'

