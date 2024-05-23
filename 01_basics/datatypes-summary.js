// Primitive

// 7 Types : String, Number, Boolean, null, Undefined, Sumbol, BigInt


const score = 100
const scoreValue = 100.3


const ifLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// Reference (Non Primitive)

// Arra y, Objects, Fundtions

//Stack (Primitive), Heap (Non-Premitive)

let myName = "Guru"
let anotherName = myName
anotherName = "New Guru"
console.log(myName);
console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);