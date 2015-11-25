var setupBoard = function() {
	var i = 0;
	var cardNum = 1;
	var count = 0;
	var z = 100;

	for (var row in memory.board) {
		while (count < 5) {

			var imgPath = "url(../memory/" + memory.board[row][count].img + ")"

			var $card = $("<div/>");
			$card.addClass("card");
			$card.addClass("full-card");
			$card.attr("id", row + count);
			$card.attr("data-value", memory.board[row][count].value);
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

$(document).ready(function() {
	var $lastCard;
	memory.createBoard();
	setupBoard();

	$(".full-card").flip({
		        axis: "y",
		        reverse: true,
		        trigger: "manual",
		        speed: 1000
	});

	$("#move").on("click", function() {
		var z = 1;

		$(".full-card").each(function(i, card) {

			var $card = $(this);

			setTimeout(function() {

				$card.position({
					my: "center",
					at: "center",
					of: "#" + $card.attr("id"),
					using: function(css) {
						$card.animate(css, 1000, "easeInOutQuad");
						setTimeout(function() {
							$card.css("z-index", z);
							z++;
						}, 350);
					}
				});	

			}, i * 350);
			
		});

		setTimeout(function(){
			$(".full-card").on("click", function() {

				if ($(this).attr("data-flipped") === "false") {
					$(this).flip(true);

					var memoryRound = memory.play($(this).attr("data-value"));

					if ( !memoryRound) {
						$lastCard.flip(false);
						$(this).flip(false);
					}

					else if ( memoryRound === "no match" ) {
						$lastCard = $(this);
					}

					else {
						$lastCard.unbind("click");
						$(this).unbind("click");
					}
				}

			});
		}, 8000);
		
	});

});
