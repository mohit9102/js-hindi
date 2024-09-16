// object can be decleared or created by two ways
//(1).by using object literal 
//(2).by using constructor(if you create object by using constructer then it singleton
// by using consutructer :- object.create


/// object literals

const mySum = Symbol("key1")//declearation of symbol data type


const Jsuser = {
     name: "hitesh",
     "full Name": "mohit Kumar",
     age: 18,
     [mySum]: "mykey1",// now it will become symbol
     location: "jaipur",
     email: "mohit@gamil.com",
     isLoggedIn: false,
     lastLonginDays: ["monday","saturday"]

    
}// object by object literals

// in objet we can defined key or value


// console.log(Jsuser.email);// this is not write way
// console.log(Jsuser["email"]);// this is coorect way
//this is always true becuse you pass
// the parameter as string 

//now you can not full Name acsess by using the dot method
// console.log(Jsuser.full Name);//you can't acsses
// console.log(Jsuser["full Name"]);//this the correct way

// console.log(Jsuser.mySum);// it will simply give string output before apply square bracket 
// inside object and acts as key

// console.log(typeof Jsuser[mySum]);//it will give string also data type

Jsuser.email = "mohit@mc.com"

// Object.freeze(Jsuser)
// Object on which to lock the attributes.
// Prevents the modification of existing property attributes and values, 
// and prevents the addition of new properties.
Jsuser.email = "mrfbef@.com"

// console.log(Jsuser);

Jsuser.greeting = function(){
         console.log("heelo js user");
}

// console.log(Jsuser.greeting);// output : [Function (anonymous)]

Jsuser.greetingTwo = function(){
     console.log(`heelo js user, ${this.name}`);// this helps to acsses the prperty of object 
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());




