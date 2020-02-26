// Suppose We are making a Lodo game so We need to Generate a Random Number Between 1-6 Every Time

// var dice = Math.round(Math.random() * 6); //It will Generate 0 to 6 in this case we do not allow 0
var dice = Math.round(Math.random() * 5) + 1;
console.log(dice)

//Generate a a random number  from 100 to 200
var randNum = Math.round(100 + Math.random() * 100)
console.log(randNum)
