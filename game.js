//
//	Frame Class
//

function frame(){
	this.rolls = [];

	//Sets the number of pins hit for a roll in a frame
	this.setRollPoints = function(pins){
		this.rolls.push(pins);
	}
	//returns the number of rolls in a aframe
	this.rollNumber = function(){
		return this.rolls.length + 1;
	}

	//returns the score of a frame, not including bonus
	this.frameScore = function(){
		var total = 0;
		for(var i = 0; i < this.rolls.length; i++)
			total += this.rolls[i];
		return total;
	}

	//returns the points of a roll in a frame
	this.rollPoints = function(rollNo){
		return this.rolls[rollNo];
	}

	//returns true if a frame was a strike
	this.isStrike = function(){
		return this.rolls.length >= 1
			&& this.rolls[0] == 10;
	}

	//returns true if a frame was as pare
	this.isSpare = function(){
		return this.rolls.length == 2
			&& this.rolls[0] + this.rolls[1] == 10;
	}
}

//
//	Game Class
//

function Game(){
	this.frames = [];
	for(var i = 0; i < 10; ++i)
		this.frames.push(new frame());
	this.currentFrame = 0;

	this.roll = function(pins){

		if(this.frames[this.currentFrame].rollNumber() == 1){
			//First Roll
			this.frames[this.currentFrame].setRollPoints(pins);
			if(pins == 10){
				if(this.currentFrame != 9)
					this.currentFrame++;
			}
		}
		else if(this.frames[this.currentFrame].rollNumber() == 2){
			//Second Roll
			this.frames[this.currentFrame].setRollPoints(pins)
			if(this.currentFrame != 9)
				this.currentFrame++;
		}
		else if(this.frames[this.currentFrame].rollNumber() == 3){
			//Third Roll
			this.frames[this.currentFrame].setRollPoints(pins);
		}
	}

	//returns the bonus for a strike on a given frame
	this.frameStrikeBonus = function(frameIndex){
		//Maybe the logic can be simplified but it takes care of special cases
		if(frameIndex != 9){
			if(this.frames[frameIndex+1].isStrike())
				if(frameIndex == 8)
					return this.frames[frameIndex+1].rollPoints(0)
						 + this.frames[frameIndex+1].rollPoints(1);
				else
					return this.frames[frameIndex+1].rollPoints(0) 
						 + this.frames[frameIndex+2].rollPoints(0);
			else
				return this.frames[frameIndex+1].frameScore();
		}
		return this.frames[frameIndex].rollPoints(1)
			 + this.frames[frameIndex].rollPoints(2);
	}

	//returns the bonus for a spare on a given frame
	this.frameSpareBonus = function(frameIndex){
		if(frameIndex < 9)
			return this.frames[frameIndex+1].rollPoints(0);
		return this.frames[frameIndex].rollPoints(2);
	}

	this.score = function(){
		var total = 0;
		for(var i = 0; i < 10; i++){
			if(this.frames[i].isStrike())
				total += 10 + this.frameStrikeBonus(i);
			else if(this.frames[i].isSpare())
				total += 10 + this.frameSpareBonus(i);
			else
				total += this.frames[i].frameScore();
		}
		return total;
	}
}
