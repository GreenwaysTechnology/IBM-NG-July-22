//class declaration
class Employee {
    //instance variables
    id: number = 1
    name: string = "foo"
    //constructors
    constructor() {
        console.log('this is constructor')
    }
    //methods
    calculate(value: number = 0): number {
        return 10 * value
    }
}
//emp is reference variable
let emp = new Employee()
console.log(emp.id, emp.name, emp.calculate(10))