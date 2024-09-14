const marvael_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]


// marvael_heros.push(dc_heros)// this will create nested array

// console.log(marvael_heros);// this is not good way to do


//so

// const allHeros = marvael_heros.concat(dc_heros)
// console.log(allHeros);

//concat method Combines two or more arrays. 
// This method returns a new array without modifying any existing arrays.

const all_new_heros = [...marvael_heros,...dc_heros]
// when you do this then array spread out 
//and we get one by one element 
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]] ]
const real_another_array = another_array.flat(Infinity)
// Returns a new array with all sub-array elements 
// concatenated into it recursively up to the specified depth.
console.log(real_another_array);
// infinity=The maximum recursion depth
// Returns a new array with all sub-array elements concatenated
//  into it recursively up to the specified depth.

console.log(Array.isArray("Mohit"));
console.log(Array.from("Mohit"));// form = convert string into array


console.log(Array.from({name: "Mohit"}));//interesting because it will give 
// empty array 
// if you want  to print the array the then you have to 
//  tell what you want to print i.e. key or values

let score1 = 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1,score2,score3));//Returns a new array from a set of elements.






