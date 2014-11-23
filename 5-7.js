var foo = { // 暗黙的にwindowオブジェクトに格納される（window.fooと同じ）
	fooMethod: function() {
		alert('foo' + 'bar'); // windowオブジェクトを暗黙的に指している
		window.alert('foo' + 'bar'); // windowオブジェクトを明示的に指定し、上の行と同じ効果を得ている
	}
}

foo.fooMethod(); // windowオブジェクトを暗黙的に指している（window.foo.fooMethod()と同じ）
