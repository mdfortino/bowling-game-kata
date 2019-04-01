//define bowling game that has two methods: 
//* roll(pins), called each time the player rolls a ball. The argument is the number of pins knocked down.
//* score(), called only after the very end of the game. Returns total score of the game.
var BowlingGame = ()=> {
	this.rolls = [];
	this.currentRoll = 0;
};

BowlingGame.prototype.roll = (pins)=> {
	this.rolls[this.currentRoll++] = pins;
};

//create score function 
BowlingGame.prototype.score = ()=> {
	var score = 0;
	var frameIndex = 0;
	var self = this;

	function sumOfBallsInFrame() {
		return self.rolls[frameIndex] + self.rolls[frameIndex + 1];
    }
}
function spareBonus() {
    return self.rolls[frameIndex + 2];
}

function strikeBonus() {
    return self.rolls[frameIndex + 1] + self.rolls[frameIndex + 2];
}

function isStrike() {
    return self.rolls[frameIndex] === 10;
}

function isSpare() {
    return self.rolls[frameIndex] + self.rolls[frameIndex + 1] === 10;
}

for (var frame = 0; frame < 10; frame++) {
    if (isStrike()) {
        score += 10 + strikeBonus();
        frameIndex++;
    } else if (isSpare()) {
        score += 10 + spareBonus();
        frameIndex += 2;
    } else {
        score += sumOfBallsInFrame();
        frameIndex += 2;
    }
}
return score;
