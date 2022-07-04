/**
 * explicit type
 * implicit type : type inference
 */

//explicit type
let a: number = 10
console.log(a)

//here b has no type : implicit type ,
//type of the variable is understood automatically based on values assined
//here 100 is number so that b's type is infered automaily to number type, so future
//assignments understood as number onl
let b = 100
console.log(b)
b="Hello"
console.log(b)

