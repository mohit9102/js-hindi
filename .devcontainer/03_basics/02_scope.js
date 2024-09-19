var c = 300


/// outside of if is called global scope 
// value in globale scope is available inside the if
// but value in block scope is not available in global or outside of if block

 let a = 300
if (true){// inside the if called block scope 
    let a = 10
    const b = 20
     c = 30// if you decleared var or not but problem is occured always
    //  console.log("INNER=", a);
     

}



//  console.log(a);
// console.log(b);
// console.log(c);// always op= 30





//// when you check scope  in the windows browser(console) 
/// is different form node in coding envoirment





/// nested scope 
function one(){
    const username = "mohit"

    function two(){
        const website = "youtube"
        console.log(username);//for nested fuction child function can acess the 
        // the parent variable
        
    }
    // console.log(website);

    two()
    
}
// one()

if(true){
    const username="mohit"
     if(username==="mohit"){
         const website = "youtube"

        //  console.log(username + website);
         
     }

    //  console.log(website);// it is out of scope
     
    
}
// console.log(username);// it is out of scope



///+++++++++++++ interesting ++++++++++++++++++++


console.log(addone(5))// it will not give erro and print 6

function addone(num){
    return num + 1
}



addTwo(5)// it will give an error  Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}






