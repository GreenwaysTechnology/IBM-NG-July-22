// arrow functions

//functions can be assigned to a variable: function literals


/**
 * myFun is just variable , holding function literal
 * 
 */
//es 5 style
let myFun = function (name: string = ""): string {
    //console.log(`Hello ${name}`)
    return `Hello ${name}`;
}
console.log(myFun())

//arrow functions
let myarrowFun = (name: string = ""): string => {
    return `Hello ${name}`;
}
console.log(myarrowFun('ram'))

myarrowFun = (name: string = ""): string => `Hello ${name}`
console.log(myarrowFun('karthik'))
