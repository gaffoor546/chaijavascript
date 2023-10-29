const accountId = 987650
let accountEmail = "gaffoor546@gaffoor.com"
var accountPassword = "87654321"
accountCity = "Andhra Pradesh"
let accountState = "AP"

//accountId = 213  // Const variables can not be changed not allowed 

console.log(accountId);
/*
Prefer not to use var 
beacuse of issue in block scope and fuctional scope
But we can use 
==>const and let
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
