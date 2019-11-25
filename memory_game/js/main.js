var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
}];
let winNum = 0;
let loseNum = 0;
var cardsInPlay = [];
var checkForMatch = function()
{

	if (cardsInPlay[cardsInPlay.length - 2] === cardsInPlay[cardsInPlay.length - 1]) 
	{
		
		winNum++;
		alert("You found a match!");
		document.getElementById('win').textContent = winNum;
	} 
	else 
	{
		
		loseNum++;
		alert("Sorry, try again.");
		document.getElementById("lose").textContent = loseNum;
		}
}

var flipCard = function()
{
	let cardId = this.getAttribute('data-id')
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage)
	console.log(cards[cardId].suit)
	this.setAttribute('src', cards[cardId].cardImage)
	if(cardsInPlay.length % 2 === 0)
	{
		checkForMatch();
	}
}

var createBoard = function()
{
	var a = document.getElementById('game-board');
	for(let i = 0; i < cards.length; i++)
	{
		var cardElement = document.createElement('img');
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute('alt', 'chosen image');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);	
		document.getElementById('game-board').appendChild(cardElement)	
	}
	console.log(a);
}

createBoard();

