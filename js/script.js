var memory = {
	board: {
		row0: {},
		row1: {},
		row2: {},
		row3: {}
	},

	cardChecked: false,
	checkedCardValue: "",
	pairs: 0,

	deck: [],

	cards: [
		{
			img: "playing-cards/aceclubs.jpg",
			value: "ab"
		},
		{
			img: "playing-cards/10spades.jpg",
			value: "10b"
		},
		{
			img: "playing-cards/jackspades.jpg",
			value: "jb"
		},
		{
			img: "playing-cards/queenspades.jpg",
			value: "qb"
		},
		{
			img: "playing-cards/kingspades.jpg",
			value: "kb"
		},
		{
			img: "playing-cards/acehearts.jpg",
			value: "ar"
		},
		{
			img: "playing-cards/10hearts.jpg",
			value: "10r"
		},
		{
			img: "playing-cards/jackhearts.jpg",
			value: "jr"
		},
		{
			img: "playing-cards/queenhearts.jpg",
			value: "qr"
		},
		{
			img: "playing-cards/kinghearts.jpg",
			value: "kr"
		}
	],

	shuffle: function(array) { //From http://bost.ocks.org/mike/shuffle/
		var length = array.length; //m
		var t;
		var i;

		// While there remain elements to shuffle…
		while (length) {
			// Pick a remaining element…
			i = Math.floor(Math.random() * length--);

			// And swap it with the current element.
			t = array[length];
			array[length] = array[i];
			array[i] = t;
		}

		console.log(array.length);
		return array;
	},

	createDeck: function() {
		var newDeck = this.cards.slice();
		length = newDeck.length;

		for (var i = 0; i < length; i++) {
			newDeck.push(newDeck[i]);
		}
		
		this.deck = newDeck;
		this.shuffle(this.deck);
	},

	createBoard: function() {
		var col = 0;
		var cardNo = 0;
		this.createDeck();

		for (var row in this.board) {
			while (col < 5) {
				this.board[row][col] = this.deck[cardNo];
				col++;
				cardNo++;
			}
			col = 0;
		}
	},

	play: function(cardValue) {
		if (this.cardChecked === true) {

			if (this.checkedCardValue === cardValue) {

				this.checkedCardValue = "";
				this.cardChecked = false;
				//alert("Cards are same");
				this.pairs++;
				return true;
			}

			else {
				this.checkedCardValue = "";
				this.cardChecked = false;
				//alert("Cards are not same");
				return false;
			}
		}

		else {
			this.cardChecked = true;
			this.checkedCardValue = cardValue;
		}
		return "no match";
	},

	// checks if you have enough pairs revealed to win the game
	checkPairs: function() { 
		if ( this.pairs === (this.deck.length / 2) ) {
			return true;
		}
		else {
			return false;
		}
		return false;
	}

};


$(document).ready(function () {
	memory.createBoard();
});
