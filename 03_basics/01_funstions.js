function sayMyName(){
    console.log("G");
    console.log("U");
    console.log("R");
    console.log("U");
}

// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){
    
    // let result = num1 + num2
    // return result

    return num1 + num2
}

const result = addTwoNumbers(3, 5)
// console.log("Result:",result);

function loginUserMessage(username = "Sam"){
    if(!username){
        // console.log("Please enter username!");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Guru"))
// console.log(loginUserMessage("Hitest"))

function calculatePrice(val1, val2, ...num1){
    return num1
}

// console.log(calculatePrice(200, 400, 500, 2000));

const user = {
    username : "Guru",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    price : 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue([200, 600, 800]));