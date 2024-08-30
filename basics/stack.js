//two typpe of memmory stack AND heap
//stack used in premitive data type
//heap used in Non-Primitive data type

/*###############primitive datatype(stack)##############*/
let myName="sanket pandit" //here it is "string" that is primitive datatype therefor it will store in stack
let nickName=myName
nickName="sank pand"

console.log(myName) //output snket pandit bcs stack its give one copy to edit not og valu
console.log(nickName)//here output is sank pand

/*###############non-primitive dt(heap)###########*/
//let see object that is non-p data type

let userOne={
    email:"user@g.com",
    upi:"user@ybl"
};
let userTwo=userOne //here it change og value
userTwo.email="user@23.com"
console.log(userOne.email)//output user@23.com
console.log(userTwo.email)//output user@23.com both are change bca it give reference of original 