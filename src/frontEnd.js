

$(document).ready (function() {

var rps = new RPS;
var rock = new Rock;
var paper = new Paper;
var scissors = new Scissors;


$('.choice').on('click', function() {
	var playerChoice = new PlayerChoice($(this).data('pick'));
	var computerChoice = rps.randomChoice(); 
	rps.versus(playerChoice, computerChoice);

	$('#playerChoice').text('You: ' + (playerChoice.type));
	$('#computerChoice').text('Computer: ' + (computerChoice.type));
	$('#outcome').text('The outcome is: ' + rps.versus(playerChoice, computerChoice).type);
	
});

});

