// Immediately Invoked Function Expression (IIFE) also known as a Self-Executing Anonymous Function
//  and contains two major parts

//this prevents accessing variables within the IIFE idiom
//  as well as polluting the global scope.

// creates the immediately invoked function expression ()
//  through which the JavaScript engine will directly interpret the function


/// +++++++++++ Syntax = ({})()
(function chai(){
    // it is named iife
    console.log(`DB CONNECTED`);
    
})(); 
// here this immediately invoked but dont know when 
// the exection should be end so to end we add semicolen(;)
// at the end otherwise it will give the error


( (name) =>{
    /// unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
    
} )("mohit");
///thiis is the way you use to pass parameter 



