var deck = ["a",2,3,4,5,6,7,8,9,10,"j","q","k"];
var suit = ["clubs", "hearts", "diams", "spades"];
var player = [0,1]
var card= [];
for(var i in suit)
	for(var j in deck)
		card.push(deck[j]);

var delay = 500 ;
var fadetime = 500;
//shuffel compeletly copy from web
function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};
// make a full array opf cards
	

//get suit(type of cards) from arraye 

function getSuit(){
  var suitSelect = Math.floor(Math.random()*4 )
  return suit[suitSelect];
}
//get new card after shuffel (number or face of cards)
function getCards(){
 for(var n=0 ; n <= player.length ; n++){
	var str = n ;
	var deckN = card[n] ;
	var suitN = getSuit();
	var classN = "rank-"+card[n];
	var inner1 = document.getElementById('ran' + n);
	var html = document.getElementById(str);
	if (html){
	html.className = "";
	html.className +=" "+classN+" "+suitN ;
	inner1.innerHTML= card[n] + "&"+suitN +';';}
	 
  }
}
// function deal use getcards - getsuit -shuffle - fade cards
function deal(){
	
	//shuffel the array of deck to catch new arr 
  shuffle(card);
  getCards();
}

var btn = document.getElementById('btn') ;
btn.onclick = function (){
	event.preventDefault();
	deal()};

