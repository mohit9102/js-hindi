// if statement

const isUserLoggedIn = true
const temperature = 41

// if( temperature < 50 ){
//    console.log("temperature is less than 50");
   
// }
// else{
//     console.log("temperature is greater than 50");
    
// }

// console.log("exectued");



// <, >, <=, ==, !=, ===(it will check data type also)


// var keyword has global scope that`s why it is not used 
const score = 200

// if  (score > 100) {
//     const power = "fly"
//     console.log(`user power : ${power}`);
    
// }


//  ++++++++++ short Hand Notation ++++++

// const balance = 1000

// if (balance > 500) console.log("test");// implicit scope

// if (balance > 500) console.log("test"),console.log("test2");
// this is not good practice

// if (balance < 500) {
//     console.log("less than 500");
    
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if ( balance < 900 ) {
//     console.log("less than 900");
    
// }else {
//     console.log("less than 1200");
// }


// ++++++++++++++ Multiple condition check
const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (UserLoggedIn && debitCard) {
    console.log("Allow to buy course");
    
}

if (loggedInFromGoogle || loggedInFromEmail)//or {
    console.log("user logged in");
    
// }




