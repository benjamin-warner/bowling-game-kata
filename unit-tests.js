//Unit tests

window.onload = function(){

	//Unit test for a perfect 300 game
	var test_perfect = new Game();
	 for(var i = 0; i < 12; i++)
	 	test_perfect.roll(10)
	console.log("Score = " + test_perfect.score());

	//Unit test for a game 100% strikes
	var test_strike = new Game();
	for(var i = 0; i < 21; i++)
		test_strike.roll(5);
	console.log("Score = " + test_strike.score());

	//Unit test for a gutterball game
	var test_gutter = new Game();
	for(var i = 0; i < 21; i++)
		test_gutter.roll(0);
	console.log("Score = " + test_gutter.score());

	//Unit test for a "stud to dud" game (I made up the term stud to dud just now)
	var test_stud_dud = new Game();
	for(var i = 0; i < 8; ++i){
		test_stud_dud.roll(10);
	}
	test_stud_dud.roll(2);
	test_stud_dud.roll(0);
	test_stud_dud.roll(4);
	test_stud_dud.roll(1);
	test_stud_dud.roll(3);
	console.log("Score = " + test_stud_dud.score());

	//Unit test for various rolls
	var test_varied = new Game();
	test_varied.roll(2);
	test_varied.roll(8);
	test_varied.roll(10);
	for(var i = 0; i < 4; i++)
		test_varied.roll(4);
	for(var i = 0; i < 13; i++)
		test_varied.roll(3);
	console.log("Score = " + test_varied.score());
}
