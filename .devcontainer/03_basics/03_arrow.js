const user ={
    username: "mohit",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , wecome to website`);
        // if you want to acsees the current context(parent variable) then you use 
        // this keyword

        // console.log(this); // this will talk about current context
        
    }

}

// user.welcomeMessage()

// user.username = "sam"// here the contex(username) is changed

// user.welcomeMessage()// output will be changed 


// console.log(this);// it will give empty because we there is no 
// current context of global


// in the browser the global object found is wnidow
// it happen when you write the console.log(this) in console




// function chai(){
//     let username = "hitesh"
//     console.log(this.username);/// this will work in object like this only
//     // it canot work the same in the function and  output will be (undefined)
        /// if you use console.log(this) then it will print the global contex
// }
// chai()



// const chai = function() {
//     let username = "hitesh"
//    console.log(this.username);/// same output as previous
// }
// chai()


////++++++++++++ arrow function +++++++++++++++++++++
const chai = ()=> {
        let username = "hitesh"
    //    console.log(this.username);// otput undefined
    // console.log(this);// it will give output {}(empty)
    
    }
  chai()


// () => {}  /// it is called as arrow fuction 



//+++++++++ Basic arrow function +++++++++++++++++++
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }



//++it can be represented by some other way
// and it is called 
// implicit arrow function
// it does not include {}
// if one line statement then return keyword will not be used
///The braces can only be omitted if the function directly returns an expression.
//  If the body has statements, the braces are required — and so is the return keyword. 
// Arrow functions cannot guess what or when you want to return.

// const addTwo = (num1, num2) =>  num1 + num2

//if {}(curly braces) then return keyword is used
/// if () paranthesis then return keyword is not used 
// const addTwo = (num1, num2) =>  (num1 + num2)



/// +++ if we want to retrun object then ++++++
const addTwo = (num1, num2) =>  ({username: "mohit"})


console.log(addTwo(3, 4))



const myArray = [2, 5, 6, 8]

// myArray.forEach(() => {})


