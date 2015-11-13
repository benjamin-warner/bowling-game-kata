//Unit tests

window.onload = function(){

	var test_Perfect = new Game();
	for(var i = 0; i < 12; i++)
		test_Perfect.roll(10)
	console.log(test_Perfect.score());

	var test_Meh = new Game();
	for(var i = 0; i < 21; i++)
		test_Meh.roll(5);
	console.log(test_Meh.score());

}
