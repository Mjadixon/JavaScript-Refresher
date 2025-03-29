//let x = 0
//let card1 = { suit: "Hearts", rank: x++ }
//let card2 = {suit:"diamonds",rank:"7"}
//let card3 = {suit:"Spades",rank:"King"}
//let card4 = {suit:"clubs",rank:"12"}
//let deck = [card1,card2,card3,card4]
//console.log("you are holding a "+ card1.rank + " of " + card1.suit + " and the "+card2.rank + " of " + card2.suit)
//for (let i = 0; i<deck.length;i++){
// console.log(deck[i].rank + " of " + deck[i].suit)}


let deck = []
let SpecialRank = { Jack: "Jack", Queen: "Queen", King: "King", Ace: "Ace" }
let suits = ["Hearts", "Clubs", "Diamonds", "Spades"]

        for (let i = 2; i < 11; i++) {
                deck.push({ rank: i, suit: [suits[0]] })
        }
        for (let i = 2; i < 11; i++) {
                deck.push({ rank: i, suit: [suits[1]] })
        }
        for (let i = 2; i < 11; i++) {
                deck.push({ rank: i, suit: [suits[2]] })
        }
        for (let i = 2; i < 11; i++) {
                deck.push({ rank: i, suit: [suits[3]] })
        }
        for (let x = 0; x < 4; x++) {
                deck.push({ rank: SpecialRank.Jack, suit: [suits[x]] })
                deck.push({ rank: SpecialRank.Queen, suit: [suits[x]] })
                deck.push({ rank: SpecialRank.King, suit: [suits[x]] })
                deck.push({ rank: SpecialRank.Ace, suit: [suits[x]] })
        }
        console.log(deck)
        
       
        type = suits.toSpliced(Math.floor(Math.random(3) * 4), Math.floor(Math.random(3)*4));
        suits.at(Math.floor(Math.random(3)*4),Math.floor(Math.random(3)*4))
        card =Math.floor(Math.random() * 11);
        console.log( "card drawn "+ card+ " of " + type)
        suits.toSpliced(card+type)