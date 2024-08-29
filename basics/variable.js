const accountId=12345 // can`t change the value
let accountEmail="pa@g.com" //change the value
var accountPassword="123" //change value but not prefer beacause of scope issue
accountCity="jaipur" //without let or var declarasion (not suggested)

// accountId=2
console.log(accountId) 
accountEmail="pa@123g.com"  //changes in let
// console.log(accountEmail)
accountPassword="789" //changes in var
accountCity="kas" //chnages 

console.table([accountId,accountEmail,accountPassword,accountCity])
/* we can print all value i one time in tabular form*/
console.log(typeof jaipur)