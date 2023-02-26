
// დაწერეთ პროგრამა, სადაც ორი a და b მომხმარებელი აგორებს კამათელს მანამ, სანამ არ გაგორდება 3. რომელიც უფრო ნაკლებ ცდაში გააგორებს სამიანს, ის არის გამარჯვებული.

function generateRandomNumber() {
    return parseInt(Math.random() * 6) + 1;
}

let playState = true;

let players = [
    {recentDice: 0, playerName: 'player1'},
    {recentDice: 0, playerName: 'player2'}
]

let count = 0;


while(playState) {
    count++;
    players.forEach(item => {
        item.recentDice = generateRandomNumber()
    })
    checkValidity();
}

function checkValidity() {
    const someoneGets3 = players.filter(item => item.recentDice === 3);
    if(someoneGets3.length > 0) {
        playState = false;
        if(someoneGets3.length === 2) {
            console.log(`result is the same with ${count} try.`);
        } else {
            console.log(`${someoneGets3[0].playerName} wins with ${count} try.`)
        }
    }
}
























