/**
 * state initalization 
 * 1.hardcoded value inside class
 *     id: number = 1
    name: string = "foo"
   2.after object creation , using reference variable
     emp.id =10
   3.using constructor
 */
class Employee {
    //instance variables
    id: number;
    name: string
    //constructors
    constructor(id: number = 1, name: string = "foo") {
        this.id = id;
        this.name = name;
    }
    //methods
    calculate(value: number = 0): number {
        return 10 * value
    }
}
//emp is reference variable
let emp = new Employee()
emp.id = 900;
emp.name = 'ram'

console.log(emp.id, emp.name, emp.calculate(10))

let emp1 = new Employee(34, 'subramanian') //constructor parameters
console.log(emp1.id, emp1.name, emp1.calculate(10))
