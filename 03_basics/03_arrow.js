const user = {
    username : "Hitesh",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "Hitesh"
//     console.log(this.username);
// }

// chai()

const chai = () =>  {
    let username = "Hitesh"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 // explicit return
// }

// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username: "Hitesh"})

console.log(addTwo (3, 4))