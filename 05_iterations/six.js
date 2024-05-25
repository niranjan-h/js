// const coding = ["js", "ruby", "python", "cpp", "java"]


// const vlaues = coding.forEach ( (item) => {
//     // console.log(item);
//     return item
// } )

// console.log(vlaues);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )


// const newNums = []
// myNums.forEach ( (num) => {
//     if (num > 4){
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

const books = [
    {
        title: 'Book One', genre : 'Fiction', publish: 1981, edition: 2010
    },
    {
        title: 'Book Two', genre : 'Fiction', publish: 2009, edition: 2014
    },
    {
        title: 'Book Three', genre : 'History', publish: 1986, edition: 2010
    },
    {
        title: 'Book Four', genre : 'Non Fiction', publish: 2011, edition: 1989
    },
    {
        title: 'Book Five', genre : 'Science', publish: 1981, edition: 2000
    },
    {
        title: 'Book Six', genre : 'History', publish: 1981, edition: 2004
    },
    {
        title: 'Book Seven', genre : 'Fiction', publish: 1981, edition: 2000
    },
    {
        title: 'Book Eight', genre : 'Non Fiction', publish: 1981, edition: 2024
    },
    {
        title: 'Book Nine', genre : 'History', publish: 1981, edition: 2018
    },
];


let userBooks = books.filter( (bk) => bk.genre === 'History' )

userBooks = books.filter ( (bk) => {
    return bk.publish >= 1995 && bk.genre === 'Fiction'
} )

console.log(userBooks);