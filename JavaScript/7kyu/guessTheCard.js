// https://www.codewars.com/kata/62b76a4f211432636c05d0a9
// DESCRIPTION:
// The Twenty-One Card Trick, also known as the 11th card 
// trick or three column trick, is a simple self-working 
// card trick that uses basic mathematics to reveal the 
// user's selected card.
// The game uses a selection of 21 cards out of a standard 
// deck. These are shuffled and the player selects one at 
// random. The cards are then dealt out face up in three 
// columns of 7 cards each. The player points to the 
// column containing their card. The cards are picked up 
// and the process is repeated three times, at which point 
// the magician reveals the selected card.
// Source: Wikipedia
// Your task is to implement an algorithm that is able to 
// execute the Twenty-One Card Trick. To simplify things, 
// the cards will be changed to the set of integers 
// between 1 and 21(inclusive). The function will be passed 
// as argument a member of the audience that has selected a 
// certain card and has a method get_input that receives a 
// list of 3 lists as arguments and returns the index of 
// the column containing the selected card. Example:
//     const audience = new Audience(13);

//     > audience.getInput([[1,2,3,4,5,6,7], [8,9,10,11,12,13,14], [15,16,17,18,19,20,21]]);
//     1 // Since 13 is at the 2nd column
// After 3 times it is asked, however, the audience member 
// no longer will give an answer. Use these three functions 
// invokations to discover which card the audience member 
// has.

function guessTheCard(audience) {
    let array = [1, 2, 3, 4, 5, 6, 7, 
                8, 9, 10, 11, 12, 13, 14, 
                15, 16, 17, 18, 19, 20, 21], 
        cards = [[], [], []], 
        count = 0;
    const deal = () => 
        array.forEach((el, idx) => cards[idx % 3].push(el)) 
    const stack = () => {
        let row = audience.getInput(cards);
        row == 0 ? array = cards[1].concat(cards[0]).concat(cards[2]) 
        : row == 1 ? array = cards[0].concat(cards[1]).concat(cards[2]) 
        : array = cards[0].concat(cards[2]).concat(cards[1]);
        cards = [[], [], []];
    } 
    while (count < 3) {
        deal() 
        stack()
        count++;
    } 
    return array[10];
}