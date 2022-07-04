
//functions

function sayHello() {
    console.log("Hello")
}
sayHello()

//args and parameters

//here type of variable is understood based on values passed
//if it string, the type of variable is string
// function sayGreet(myname) {
//     console.log(`Hello ${myname}`)
// }
//with implicitAny: true flag
function sayGreet(myname: any) {
    console.log(`Hello ${myname}`)
}
sayGreet('Subramanian')
sayGreet(100)

//type safe parameters
function sayHai(name: string) {
    console.log(`hai ${name}`)
}
sayHai('Subramanian')
//sayHai(100)

function saySomething(name: any) {
    console.log(`hai ${name}`)
}
saySomething('Subramanian')
/////////////////////////////////////////////////////////////////////////////////

//default args:if no parameter is supplied
function add(a: number = 0, b: number = 0) {
    let c: number = a + b;
    console.log(`C ${c}`)
}
add(10, 10)
// add(10,"10")
add()
//optional arg ?
function multiply(a?: number, b?: number) {
    let c: number = a * b;
    console.log(`C ${c}`)
}
multiply(10, 10)
multiply()