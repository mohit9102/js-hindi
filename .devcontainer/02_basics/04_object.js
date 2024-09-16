//const tinderUser = new object ()// this is the singelton 
const tinderUser = {} // this is not singleton

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "mohit@gmail.com",
    fullname: {
        username: {

             firstname:"hitesh",
             lastname: "chodhary"
            }
        }
}

// console.log(regularUser.fullname.username);

const obj1 = {1 : "a",2: "b"}
const obj2 = {3 : "a",4: "b"}

//const obj3 ={obj1,obj2}

//const obj3 = Object.assign({},obj1,obj2)
//The target object to copy to.
//Copy the values of all of the enumerable own properties from 
//one or more source objects to a target object.
// Returns the target object.
const obj3 = {...obj1,...obj2}
// console.log( obj3)


const users = [
    {
        id: 1,
        email: "mogiry@gmail.com"
    },
    {
        id: 1,
        email: "mogiry@gmail.com"
    },
    {
        id: 1,
        email: "mogiry@gmail.com"
    },
]

//user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));// dataType odf output is array of string
// Object that contains the properties and methods. 
//This can be an object that you created or an existing Document Object Model (DOM) object.
//Returns the names of the enumerable string properties and methods of an object.
// // console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))// output comes in nested array


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



/////##############OBJECT DESTRUCTURE############

const course = {
    coursename: "js in Hindi",
    price:"999",
    courseInstructor:"hitesh"

}

// course.courseInstructor

//const {courseInstructor} = course //exatraction of vlaue from coursinstructor from course object
const {courseInstructor: instructor} = course

//console.log(courseInstructor);//destructure
console.log(instructor)// another way



//##############API###########
 
//this is  json look like an object

// {
//     "name": "hitesh"
//     "course":jnbwnax,
//     "price" : 5665
// }






