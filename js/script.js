var memory = {
	board: {
		row0: {},
		row1: {},
		row2: {},
		row3: {}
	},

	cards: {
		1: {
			img: "playing-cards/9clubs.jpg",
			value: "9"
		},
		2: {
			img: "playing-cards/10clubs.jpg",
			value: "10"
		},
		3: {
			img: "playing-cards/jackclubs.jpg",
			value: "J"
		},
		4: {
			img: "playing-cards/queenclubs.jpg",
			value: "q"
		},
		5: {
			img: "playing-cards/kingclubs.jpg",
			value: "k"
		},
		6: {
			img: "playing-cards/9hearts.jpg",
			value: "9"
		},
		7: {
			img: "playing-cards/10hearts.jpg",
			value: "10"
		},
		8: {
			img: "playing-cards/jackhearts.jpg",
			value: "j"
		},
		9: {
			img: "playing-cards/queenhearts.jpg",
			value: "q"
		},
		10: {
			img: "playing-cards/kinghearts.jpg",
			value: "k"
		},
		11: {
			img: "playing-cards/9diamonds.jpg",
			value: "9"
		},
		12: {
			img: "playing-cards/10diamonds.jpg",
			value: "10"
		},
		13: {
			img: "playing-cards/jdiamonds.jpg",
			value: "j"
		},
		14: {
			img: "playing-cards/queendiamonds.jpg",
			value: "q"
		},
		15: {
			img: "playing-cards/kingdiamonds.jpg",
			value: "k"
		},
		16: {
			img: "playing-cards/9spades.jpg",
			value: "9"
		},
		17: {
			img: "playing-cards/10spades.jpg",
			value: "10"
		},
		18: {
			img: "playing-cards/jspades.jpg",
			value: "j"
		},
		19: {
			img: "playing-cards/queenspades.jpg",
			value: "q"
		},
		20: {
			img: "playing-cards/kingspades.jpg",
			value: "k"
		}
	},

	createBoard: function() {
		var col = 0;
		var cardNo = 1;

		for (var row in this.board) {
			while (col < 5) {

				this.board[row][col] = this.cards[cardNo];
				col++;
				cardNo ++;
			}
			col = 0;
		}
	}

};
$(document).ready(function () {
	memory.createBoard();
});
