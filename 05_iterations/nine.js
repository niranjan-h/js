const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and curval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemname: "JS Course",
        price : 2999
    },
    {
        itemname: "Py Course",
        price : 999
    },
    {
        itemname: "Mobile Course",
        price : 5999
    },
    {
        itemname: "Data Science Course",
        price : 12999
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);