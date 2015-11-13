//Game class

function Game(){
	this.rollNumber = 0;
	this.rolls = [];

	this.roll = function(pins){
		this.rolls[this.rollNumber] = pins;
		this.rollNumber++;
	};

	this.score = function(){

		var total = 0,
			frame = 0;
		for(var i = 0; i < 10; i++){
			if(this.rolls[frame] == 10){
				total += this.rolls[frame] + this.rolls[frame+1] + this.rolls[frame+2];
				frame++;
			}
			else if(this.rolls[frame] + this.rolls[frame+1] == 10){
				total += this.rolls[frame] + this.rolls[frame+1];
				frame += 2;
			}
			else{
				total += this.rolls[frame] + this.rolls[frame+1];
				frame += 2;
			}
		
		}
		return total;
	}
}
