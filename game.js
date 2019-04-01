//define bowling game with rolls array and currentRoll properties
var BowlingGame = () => {
	this.rolls = [];
	this.currentRoll = 0;
};

BowlingGame.prototype.roll = (pins)=> {
	this.rolls[this.currentRoll++] = pins;
};

//create score function 
BowlingGame.prototype.score = function() {
	var score = 0;
	var frameIndex = 0;
	var self = this;

	function sumOfBallsInFrame() {
		return self.rolls[frameIndex] + self.rolls[frameIndex + 1];
    }
}
