//  dates

let mydate = new Date()

// console.log(mydate);
// console.log(mydate.toString())
// console.log(mydate.toDateString());

// console.log(typeof mydate);/// it is an object

// let myCreateDate  =  new Date(2023, 0, 23, 5, 3)
// console.log(myCreateDate);

//let myCreateDate = new Date("01-14-2023")
let myCreateDate= new Date("01-30-2023")

// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);

// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);

console.log(newDate.getDay());


newDate.toLocaleString('default', {
    weekday:"long",
    
})














