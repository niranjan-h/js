const name = "Guru"
const repoCount = "20"

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('guru-h-com')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6, 4)
console.log(anotherString);

const newStringOne = "        guru          "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://nexenstial.com/guru%20h"
console.log(url.replace('%20','-'));

console.log(url.includes('hriuhf'));

console.log(gameName.split('-'));
console.log(gameName.split('-'));