//function returns

//implicit return
// function add(a: number = 0, b: number = 0) {
//     return a + b
//     //return "test"
// }

//explcit return
function add(a: number = 0, b: number = 0): number {
    return a + b
    //return "test"
}
console.log(add(10, 10))

//void : function does not return any thing

function sayHello(): void {
    console.log("Hello")
   // return "Hello"
}