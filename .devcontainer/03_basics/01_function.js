

function sayMyName(){
    console.log("m");
    console.log("o");
    console.log("h");
    console.log("i");
    console.log("t");
    
}

// sayMyName()

function addTwoNumbers(number1 , number2){//here the parameter that passes in making of function
    //  let result = number1+number2;
    //  return result

    return number1+ number2
    
}

const result = addTwoNumbers(3,4)// when the function is call the argument is passes

// console.log("Result:", result);


function loginUserMessage(username = "sam"){
    //if(username === undefined)
    if(!username){
        console.log("plesse enter the user name");
        return

    }
    return `${username} just logged in`
}

console.log(loginUserMessage());

