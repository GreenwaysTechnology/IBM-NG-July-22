//variable without any value 
let price: number;
console.log(price)

let myvar: undefined
console.log(myvar)

//here variable type is explicitly declared undefined so you cant assign any values
// let a:undefined =100;

//without any explicit type and value =>implicit undefined
let b;
console.log(`b ${b}`)
b = 100
console.log(`b ${b}`)
b = "Hello"
console.log(`b ${b}`)


let d = undefined
console.log(`d ${d}`)
d = "hello"
console.log(`d ${d}`)
//there is req that i need like js variable declaration : the variable must hold any value at any time.
// there is another req that if we dont know the exact type in advance

//solution : declare variable without any explicit type and unitalized : like above:
//which is not recommended.
//using there is type called "any"

let c: any = 1
console.log(`c ${c}`)
c = "Hello"
console.log(`c ${c}`)









