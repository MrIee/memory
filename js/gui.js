
$(document).ready(function() {

	memory.createBoard();

	var setupBoard = function() {
		var i = 0;
		var count = 0;
		for (var row in memory.board) {
			while (count < 5) {
				console.log( memory.board[row][i].value);
				i++;
				count++;
			}
			count = 0;
		}
	}

	setupBoard();

	$("#move").on("click", function() {
		$("#box1").position({
			my: "center",
			at: "center",
			of: "#box2",
			using: function(css) {
				$(this).animate(css, 1000, "linear");
			}
		});
	});

});
