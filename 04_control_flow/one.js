//if 

const isUserLoggedIn = true
const temperature = 41

// if (temperature === 40) {
//     console.log("Less than 50");
// } else {
//     console.log("Greater than 50");
// }

// console.log("Execute");

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// // if (balance > 500) console.log("test"), console.log("test 2");

// if (balance < 500) {
//     console.log("Less than 500");
// } else if (balance < 750){
//     console.log("Less than 750");
// } else if (balance < 900){
//     console.log("Less than 900");
// }else{
//     console.log("Less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allowed to buy courses");
}

if (loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}

//Nullish coalescing operator (??): null, undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);

// Ternary operator

// condition ? ture : false

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("Less than 100") : console.log("More than 80");