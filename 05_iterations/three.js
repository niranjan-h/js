// for of

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps are iteratable in for of loop

const map = new Map()
map.set('IN', "India")
map.set('US', "USA")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':', value);
}

//objects are not iteratable in for of loop
const myObject = {
    'game1':'NFS',
    'gmae2':'GTA'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':', value);
// }

