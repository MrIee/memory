var memory = {
	board: {
		row0: {},
		row1: {},
		row2: {},
		row3: {}
	},

	cardChecked: false,
	checkedCardValue: "",

	deck: {},

	cards: {
		1: {
			img: "playing-cards/9clubs.jpg",
			value: "9b"
		},
		2: {
			img: "playing-cards/10clubs.jpg",
			value: "10b"
		},
		3: {
			img: "playing-cards/jackclubs.jpg",
			value: "jb"
		},
		4: {
			img: "playing-cards/queenclubs.jpg",
			value: "qb"
		},
		5: {
			img: "playing-cards/kingclubs.jpg",
			value: "kb"
		},
		6: {
			img: "playing-cards/9hearts.jpg",
			value: "9r"
		},
		7: {
			img: "playing-cards/10hearts.jpg",
			value: "10r"
		},
		8: {
			img: "playing-cards/jackhearts.jpg",
			value: "jr"
		},
		9: {
			img: "playing-cards/queenhearts.jpg",
			value: "qr"
		},
		10: {
			img: "playing-cards/kinghearts.jpg",
			value: "kr"
		},
		11: {
			img: "playing-cards/9diamonds.jpg",
			value: "9r"
		},
		12: {
			img: "playing-cards/10diamonds.jpg",
			value: "10r"
		},
		13: {
			img: "playing-cards/jackdiamonds.jpg",
			value: "jr"
		},
		14: {
			img: "playing-cards/queendiamonds.jpg",
			value: "qr"
		},
		15: {
			img: "playing-cards/kingdiamonds.jpg",
			value: "kr"
		},
		16: {
			img: "playing-cards/9spades.jpg",
			value: "9b"
		},
		17: {
			img: "playing-cards/10spades.jpg",
			value: "10b"
		},
		18: {
			img: "playing-cards/jackspades.jpg",
			value: "jb"
		},
		19: {
			img: "playing-cards/queenspades.jpg",
			value: "qb"
		},
		20: {
			img: "playing-cards/kingspades.jpg",
			value: "kb"
		}
	},

	shuffleDeck: function() {
		
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
	},

	play: function(cardValue) {
		if (this.cardChecked === true) {

			if (this.checkedCardValue === cardValue) {

				this.checkedCardValue = "";
				this.cardChecked = false;
				alert("Cards are same");
				return true;

			}

			else {
				this.checkedCardValue = "";
				this.cardChecked = false;
				alert("Cards are not same");
				return false;
			}
			
		}

		else {
			this.cardChecked = true;
			this.checkedCardValue = cardValue;
		}
		return "no match";
	}

};


$(document).ready(function () {
	memory.createBoard();
});
