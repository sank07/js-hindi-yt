const  marvel =["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]

// marvel.push(dc)
// console.log(marvel)//here all dc array take as one variable [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

//but if we want to create one array from both array
const newHeros=[...marvel,...dc] //spread operator
console.log(newHeros)//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


///////sort complex array////////
const complexArray=[1,2,3,[5,6,7],5,9,7,[7,8,9,[5,6]],5]
console.log(complexArray) //very complex [ 1, 2, 3, [ 5, 6, 7 ], 5, 9, 7, [ 7, 8, 9, [ 5, 6 ] ], 5 ]
//now sort this
const sortedArray=complexArray.flat(Infinity)
console.log(sortedArray)
//output:
/*[
  1, 2, 3, 5, 6, 7,
  5, 9, 7, 7, 8, 9,
  5, 6, 5
]*/

console.log(Array.isArray("sanket"))//asking it is array or not so answer is false
//convert in arrar
console.log(Array.from("sanket"))//convert in array
