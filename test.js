//followed the following tutorials:
//* https://www.youtube.com/watch?v=jKnLZC38_r4
//* https://github.com/hontas/bowling-game-kata
//* http://butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata

describe("BowlingGame", function() {
	var game;

	beforeEach(function(){
		game = new BowlingGame();
	});

	function rollMany (n, pins) {
		for (var i = 0; i < n; i++) {
			game.roll(pins)
		}
	}

	it("handle gutter game", function() {
		rollMany(20, 0);
		expect(game.score()).to.equal(0);
	});

	it("should handle all ones", function() {
		rollMany(20, 1);
		expect(game.score()).to.equal(20);
	});
});



