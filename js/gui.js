
$(document).ready(function() {

	memory.createBoard();

	var setupBoard = function() {
		var i = 0;
		var count = 0;
		var z = 100;

		for (var row in memory.board) {
			while (count < 5) {

				var imgPath = "url(../memory/" + memory.board[row][count].img + ")"

				var $card = $("<div/>");
				$card.addClass("card");
				$card.attr("id", count);
				$card.css({
							"background-image": imgPath,
							"z-index": z
						});
				$("body").append($card);

				count++;
				z--;
			}

			i++;
			count = 0;
		}
	}

	setupBoard();

	$("#move").on("click", function() {
		var z = 1;
		$.each($(".card"), function(i, card) {

			var $card = $(this);

			setTimeout(function() {
				
				$card.position({
					my: "center",
					at: "center",
					of: "#box2",
					using: function(css) {
						$card.animate(css, 1000, "linear");
					}

				});

			}, 500 + ( i * 500));
			
		});
		
	});

});
