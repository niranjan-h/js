// const appUser = new Object()

const appUser = {}

appUser.id = "123abc"
appUser.name = "Guru"
appUser.isLoggedIn = false

// console.log(appUser);

const regularApp = {
    email : "guru@nex.com",
    fullname : {
        userfullname : {
            firstname: "Guru",
            lastname: "H"
        }
    }
}

// console.log(regularApp.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id:1,
        email: "email@gmail.com"
    },
    {
        id:1,
        email: "email@gmail.com"
    },
    {
        id:1,
        email: "email@gmail.com"
    },
    {
        id:1,
        email: "email@gmail.com"
    },
]

users[1].email;
// console.log(appUser);

// console.log(Object.keys(appUser));
// console.log(Object.values(appUser));
// console.log(Object.entries(appUser));

// console.log(appUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename : "JS in Hindi",
    price : "999",
    courseInstructor : "Hitesh"
}
const {courseInstructor: instructor} = course
console.log(courseInstructor);
console.log(instructor);

// {
//     "name" : "Guru",
//     "coursername" : "js in hin",
//     "price" : "free"
// }

[
    {},
    {},
    {},
]
