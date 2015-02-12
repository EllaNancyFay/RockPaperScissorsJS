function RPS() {};

function Rock() {
  this.type = 'rock';
};

function Paper() {
  this.type = 'paper';
};

function Scissors() {
  this.type = 'scissors';
 };

 function Draw() {
  this.type = 'draw';
 };

function PlayerChoice(my_type){
  this.type = my_type
};

RPS.prototype.versus = function(choiceOne, choiceTwo) {
 if(choiceOne.type === choiceTwo.type){
  return new Draw
 }
  if((choiceOne.type === ('rock') && choiceTwo.type === ('scissors')) ||
    (choiceOne.type === ('scissors') && choiceTwo.type === ('rock'))) 
  return 'rock wins';

  if((choiceOne.type === ('paper') && choiceTwo.type === ('scissors')) ||
    (choiceOne.type === ('scissors') && choiceTwo.type === ('paper')))
  return 'scissors wins';

  if((choiceOne.type === ('paper') && choiceTwo.type === ('rock')) ||
    (choiceOne.type === ('rock') && choiceTwo.type === ('paper')))
  return 'paper wins';
};


RPS.prototype.randomChoice = function() {
  var choice = [new Rock, new Paper, new Scissors]
  return choice[Math.floor(Math.random() * 3)]
};







