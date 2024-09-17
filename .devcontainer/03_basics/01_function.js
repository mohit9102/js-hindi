

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





/// when you don't know the number of price
//the we use rest operator(...) and pass the various of number of argument
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500, 444))// [500 , 444]

const user =  {
    username :"mohit",
    price: 199
}
 
 function handleObject (anyobject){
    console.log(`username is ${anyobject.username} and Price is ${anyobject.price}`);
    

 }

//  handleObject(user)

 handleObject({
    username:"sam",
    price: 399
 })


 const mynewArray = [ 200, 400, 1000,600]
function returnScondValue(getArray){

    return getArray[1]

}
// console.log(returnScondValue(mynewArray));
console.log(returnScondValue([200,444,55]));
