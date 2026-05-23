const accountId=1334
let accountEmail="adi@gmail.com"
var accountPassword="12345"
accountCity="Kanpur"          //   ---> by default var
let accountState;
// console.log(accountEmail);
// console.log(accountPassword);
//accountId=5               //---> This is not allowed. Error -> TypeError: Assignment to constant variable.
//              First print then error message
console.log(accountId);

accountEmail="adish@gmail.com"
accountPassword="123"
accountCity="Mathura"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
Prefer not to use var 
Because of issue in block scope and functional scope
*/