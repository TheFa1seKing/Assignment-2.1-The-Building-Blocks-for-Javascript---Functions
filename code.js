var dealerSum=0; //These are global values
var yourSum=0;//These are global values

var dealerAceCount=0;//These are global values
var yourAceCount=0;//These are global values

var hidden; //Keeps track of the dealers hidden card
let deck;

var canHit=true;  //allows the player (you) to draw while yourSum <= 21

window.onload = function() {   //When the pages loads it will conduct these actions
    buildDeck();
    shuffleDeck();
}
function buildDeck() {
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let types = ["C", "D", "H", "S"];
    deck = [];

    for (let i = 0; 1 <types.length; i++){
        for (let j =0; j <values.length; j++) {
            desk.push(values[j] + "-" + types[i] );//Ace-Clubs -> King-Clubs, Ace-Diamonds -> King-Diamonds
        }
    }
    console.log(desk);
}
function shuffleDeck() {
    for (let i = 0; i < deck.length; i++ ) {
    let j = Math.floor(Math.random() * deck.length); // (0-1) * 52 => (0-51.9999)
    let temp =deck[i];
    deck[i] = deck[JSON];
    deck[j] = temp;
}
console.log(deck);
}