// //dates

// let myDate=new Date()
// console.log(myDate)//2024-08-30T07:24:03.777Z not readable
// ////diff oper on date 

// console.log(myDate.toString());// Fri Aug 30 2024 07:25:14 GMT+0000
// console.log.apply(myDate.toDateString());//Fri Aug 30 2024 07:26:39 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleString());//8/30/2024, 7:29:13 AM

let myCreatedDate = new Date(2023, 0 , 23)
console.log(myCreatedDate)
console.log(myCreatedDate.toLocaleString())

/////time stamps

let myTimeStamp= Date.now()
console.log(myTimeStamp)
