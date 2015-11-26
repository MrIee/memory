ion.sound({
	sounds : [
		{ name: "cardSlide3" },
		{ name: "cardPlace3" },
		{ name: "cardPlace4" }

	],

	path: "sounds/",
	preload: true,
	multiplay: true,
	volume: 0.6
});


var flipSpeed = 500;
var $lastCard = $("<div/>");

var createDeckHTML = function(numColumns, boardSize) {
	var i = 0;
	var cardNum = 1;
	var count = 0;
	var z = 100;

	for (var row in memory.board[boardSize]) {
		while (count < numColumns) {
			
			var imgPath = "url(../memory/" + memory.board[boardSize][row][count].img + ")"
			
			var $card = $("<div/>");
			$card.addClass("card");
			$card.addClass("full-card");
			$card.attr("id", row + count);
			$card.attr("data-value", memory.board[boardSize][row][count].value);
			$card.attr("data-flipped", "false");
			$card.css("z-index", z);

			var $cardBack = $("<div/>");
			$cardBack.addClass("card");
			$cardBack.css("background-image", "url(../memory/playing-cards/back.jpg");

			var $cardFront = $("<div/>");
			$cardFront.addClass("card");
			
			$cardFront.css("background-image", imgPath);

			$card.append($cardBack);
			$card.append($cardFront);
			
			$("body").append($card);

			count++;
			cardNum++;
			z--;
		}

		i++;
		count = 0;
	}
}

var playRound = function() {
	$(".scoreboard").html("");
	if ( $(this).attr("id") !== $lastCard.attr('id') ) {

		if ($(this).attr("data-flipped") === "false") {
			$(this).flip(true);
			ion.sound.play("cardPlace3");

			var memoryRound = memory.play($(this).attr("data-value"));

			if (!memoryRound) {
				setTimeout(function(){
					$(".scoreboard").html("No match!");
				}, flipSpeed);
				
				$card = $(this);
				$(".full-card").off();

				setTimeout(function() {
					$lastCard.flip(false);
					ion.sound.play("cardPlace4");
					$card.flip(false);
					ion.sound.play("cardPlace4");
					$(".scoreboard").html("");
					$(".full-card").on("click", playRound);
				}, flipSpeed + 500);
			}

			else if ( memoryRound === "no match" ) {
				$lastCard = $(this);
			}

			else {
				$lastCard.removeClass("full-card");
				$lastCard.off();
				$(this).removeClass("full-card");
				$(this).off();
				setTimeout(function(){
					$(".scoreboard").html("You found a pair!");
				}, flipSpeed);
			}
		}

		if (memory.checkPairs()) {
			setTimeout(function(){
				$(".scoreboard").html("You win!");
			}, flipSpeed * 2);
		}

	}	
}

var setupNewGame = function(numColumns, boardSize) {
	createDeckHTML(numColumns, boardSize);
	$(".board-sizes-menu").hide();

	$(".full-card").flip({
        axis: "y",
        reverse: true,
        trigger: "manual",
        speed: flipSpeed
	});
}

var setupNewBoard = function($selection) {
	var numCards = parseInt( $selection.attr("data-numCards") );
	var numColumns = parseInt( $selection.attr("data-columns") );
	var boardSize = $selection.attr("id");

	memory.setupDeck(numCards, numColumns, boardSize);
	$(".playing-area").load(boardSize + ".html");
	
	setupNewGame(numColumns, boardSize);
}

$(document).ready(function() {

	var cardIntervalTime = 200;

	$("#5x4").on("click", function() {
		setupNewBoard($(this));

		$(".scoreboard").html("");
		$(".full-card").css({
			height: "125px",
			width: "87px"
		});
	});

	$("#6x5").on("click", function() {
		setupNewBoard($(this));
		
		$(".scoreboard").html("");
		$(".full-card").css({
			height: "100px",
			width: "70px"
		});
	});

	$("#7x6").on("click", function() {
		setupNewBoard($(this));

		$(".scoreboard").html("");
		$(".full-card").css({
			height: "70px",
			width: "49px"
		});
	});

	$("#new-game").on("click", function(){
		$(".card").remove();
		$(".row").remove();
		$(".board-sizes-menu").show();

		memory.resetGame();
		$lastCard = $("<div/>");
		$(".scoreboard").html("Memory!");
	});

	$("#deal").on("click", function() {
		var z = 1;

		$(".full-card").each(function(i, card) {

			var $card = $(this);

			setTimeout(function() {

				$card.position({
					my: "center",
					at: "center",
					of: "#" + $card.attr("id"),
					using: function(css) {
						$card.animate(css, 500, "easeInOutQuad");
						ion.sound.play("cardSlide3");

						setTimeout(function() {
							$card.css("z-index", z);
							z++;
						}, 350);
					}
				});	

			}, i * cardIntervalTime);
			
		});

		setTimeout(function(){
			$(".full-card").on("click", playRound);
		}, cardIntervalTime * memory.deck.length);
		
	});

});
