var memory = {
	board: {
		"5x4": {
			row0: {},
			row1: {},
			row2: {},
			row3: {}
		},
		"6x5": {
			row0: {},
			row1: {},
			row2: {},
			row3: {},
			row4: {}
		},
		"7x6": {
			row0: {},
			row1: {},
			row2: {},
			row3: {},
			row4: {},
			row5: {}
		}
	},

	cardChecked: false,
	checkedCardValue: "",
	pairs: 0,

	deck: [],

	cards: [
		{
			img: "playing-cards/acespades.jpg",
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
		},
		{
			img: "playing-cards/5spades.jpg",
			value: "5b"
		},
		{
			img: "playing-cards/6spades.jpg",
			value: "6b"
		},
		{
			img: "playing-cards/7spades.jpg",
			value: "7b"
		},
		{
			img: "playing-cards/8spades.jpg",
			value: "8b"
		},
		{
			img: "playing-cards/9spades.jpg",
			value: "9b"
		},
		{
			img: "playing-cards/5hearts.jpg",
			value: "5r"
		},
		{
			img: "playing-cards/6hearts.jpg",
			value: "6r"
		},
		{
			img: "playing-cards/7hearts.jpg",
			value: "7r"
		},
		{
			img: "playing-cards/8hearts.jpg",
			value: "8r"
		},
		{
			img: "playing-cards/9hearts.jpg",
			value: "9r"
		},
		{
			img: "playing-cards/jokerred.jpg",
			value: "jkr"
		}
	],

	//Fisher-Yates Shuffle from http://bost.ocks.org/mike/shuffle/
	shuffle: function(array) { 
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

		return array;
	},

	createDeck: function(numCards) {
		var newDeck = this.cards.slice(0, numCards);
		length = newDeck.length;

		for (var i = 0; i < length; i++) {
			newDeck.push(newDeck[i]);
		}
		
		this.deck = newDeck;
		this.shuffle(this.deck);
	},

//Parameters: 
	//decklength (i.e. half the number of spaces in the grid e.g. 10),
	//number of rows in grid
	setupDeck: function(numCards, numColumns, boardSize) {
		var col = 0;
		var cardNo = 0;
		var board = this.board[boardSize];
		this.createDeck(numCards);

		for (var row in board) {
			while (col < numColumns) {
				board[row][col] = this.deck[cardNo];
				col++;
				cardNo++;
			}
			col = 0;
		}
	},

	resetGame: function() {
		this.pairs = 0;
		this.checkedCardValue = "";
		this.cardChecked = false;
	},

	play: function(cardValue) {
		if (this.cardChecked === true) {

			if (this.checkedCardValue === cardValue) {

				this.checkedCardValue = "";
				this.cardChecked = false;
				this.pairs++;
				return true;
			}

			else {
				this.checkedCardValue = "";
				this.cardChecked = false;
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
