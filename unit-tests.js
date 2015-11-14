//Unit tests

window.onload = function(){

	//Unit test for a perfect 300 game
	var test_perfect = new Game();
	 for(var i = 0; i < 12; i++)
	 	test_perfect.roll(10)
	console.log("score = " + test_perfect.score());

	//Unit test for a game 100% strikes
	var test_strike = new Game();
	for(var i = 0; i < 21; i++)
		test_strike.roll(5);
	console.log(test_strike.score());

	// //Unit test for a gutterball game
	// var test_gutter = new Game();
	// for(var i = 0; i < 21; i++)
	// 	test_gutter.roll(0);
	// console.log(test_gutter.score());

	// //Unit test for various rolls
	// var test_varied = new Game();
	// for(var i = 0; i < 16; ++i)
	// 	test_varied.roll(5);
	// test_varied.roll(2);
	// test_varied.roll(4)
	// test_varied.roll(10);
	// test_varied.roll(10);
}
