// http://jsfiddle.net/jseja/wWYD5/
// 関数
var myFunction = function(){return 'foo';};
console.log(myFunction()); // 出力：'foo'

// メソッド
var myObject = {myFunction: function(){return 'bar';}};
console.log(myObject.myFunction()); // 出力：'bar'

// コンストラクタ
var Cody = function(){
    this.living = true;
    this.age = 33;
    this.gender = 'male';
    this.getGender = function() {return this.gender;};
}
var cody = new Cody(); // newとともにCodyコンストラクタを実行することによりインスタンスが生成される
console.log(cody); // codyオブジェクトとそのプロパティを出力

// apply()とcall()
var greet = {
    runGreet: function(){
        console.log(this.name,arguments[0],arguments[1]);
    }
}

var cody = {name: 'cody'};
var lisa = {name: 'lisa'};

// greetオブジェクトのrunGreetメソッドをcodyオブジェクトから呼び出しているように実行
greet.runGreet.call(cody,'foo','bar'); // 出力：cody foo bar

// lisaオブジェクトの中から呼び出しているように実行
greet.runGreet.apply(lisa, ['foo','bar']); // 出力：lisa foo bar

/* call()とapply()実行時のパラメータの渡し方の違いに注目 */
