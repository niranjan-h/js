// singleton
// Object.create

// oobject literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Guru",
    "full name" : "Guru Hiremth",
    [mySym] : "mykey1",
    age: "25",
    location : "Hubli",
    email : "guru@nex.com",
    isLoggedIn : false,
    lastLoginDats : ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "niranjan@nex.com"
// Object.freeze(JsUser)
JsUser.email = "niranjan@nexyyy.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());