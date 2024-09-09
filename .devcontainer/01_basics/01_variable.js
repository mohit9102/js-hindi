const accountId = 1445444
let accountEmail = " always.mohitkr@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"

let accountState;
// accountId=2  not allowed
accountEmail="hc2ch@gmail.com"
accountPassword="1122233"
accountCity="Belgluru"

console.log(accountId);

/*
prefer not to use var
Because of issue in block scope and funtional scope 
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
 