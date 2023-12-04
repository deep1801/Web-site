const accountId=123458
let accountEmail="pradeep@gmail.com"
var accountPassword="7658"
accountCity="Jaipur"

//accountId=2// not allowed
accountEmail="hchc@.com"
accountPassword="9080"
accountCity="Banaras"

console.log(accountId);
/*
Prefer not to use var because of issues in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity])