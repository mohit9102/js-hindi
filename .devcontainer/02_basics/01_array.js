//arrray

const myArr = [0, 1,2 ,3 ,4, 5]// array is object 
// it can collet or  store every elmemnt irrespective of data type
const myHero = ["shaktiman", "naagraj"]
// arrray of javaScript are dynamic
//nested aaray
//you canot use string to acsses the array as index
// copy operation in array always make shallow copy
const myArr2 = new Array(1,2,3,4)

// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)// add the element at the first
// myArr.shift() //simply remove the first eleme0nt
// console.log(myArr.includes(9));// give result in boolean
// console.log(myArr.indexOf(9));// if element is not in the array op is -1


// const newArr = myArr.join()// it bind the array and convert it into string
// console.log( newArr);

// console.log(myArr)



// //// slice,  splice    //////

console.log("A", myArr);

const myn1 =myArr.slice(1, 3)// it does not include the last index
// it dose not the manupulate

console.log(myn1);
console.log("B",myArr);


//splice

const myn2 = myArr.splice(1, 3)//
console.log("c", myArr);
console.log(myn2);// splice include the last element in the range
//and also manipulate the original or delet that range of element from original array 













