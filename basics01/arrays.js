///array
let myArr=[1,2,3,4,5]
console.log(myArr[2])

let heros=["shaktiman","nagraj","jethalal"]
console.log(heros[2])

/*############   arrays ke methods   ############*/
heros.push("modiji") //enter in heros array
console.log(heros)
heros.pop()//no need argument directly pop last element of arrays

console.log(heros)//modiji no more in heros

/*############   arrays ke methods   ############*/
heros.unshift("modiji")//here modiji added in first posi of array
console.log(heros)
heros.shift()
console.log(heros)//first posi mean modiji remove from array
 
/*############   arrays ke methods slice splice  ############*/
//slice: not change main array just slice give part
//splice cut out given  part from array
