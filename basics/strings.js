const name="sanket"
const age=23

// concatination of string old method
console.log(name + age)//old not good

//now using backtic
console.log(`hello my name is ${name} and my age is  ${age}`)
//output is my name.....snket......is2  23

const gameName= new String('sanket')
//each letter of string sve in key value pair in (index:letter)
//now i want to print "k" from sanket
console.log(gameName[3]); //i get k from sanket
console.log(gameName.length); //6
console.log(gameName.toUpperCase()); //SANKET
console.log(gameName.charAt(2));// it give wich char at 2 index i.e(n)
console.log(gameName.indexOf('t')); //index posi of "t"


/*#######other string method##############*/
  // substring
  //slice
  //trim(remove white space from start and end)
  //include ('anythig') it will check that word present in string or not
  