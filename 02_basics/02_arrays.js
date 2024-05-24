const marvel_heros = ["thor","Ironman", "spiderman"]
const dc_heros = ["batman","flash","superman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeors = marvel_heros.concat(dc_heros)
// console.log(allHeors);

//spread operator
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1,2,3, [4,5,6], 7, [6,7], [4,5]]

//Infinity is the depth
const real_another_raay = another_array.flat(Infinity)
console.log(real_another_raay);



console.log(Array.isArray("Guru"));
console.log(Array.from("Guru"));
console.log(Array.from({name: "guru"})); //Interesting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));