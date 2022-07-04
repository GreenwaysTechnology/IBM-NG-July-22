/**
 * Encapuslation
 *  1.private
 *     cant accessed outside class
 *  2.public
 *    can be accessed outside
 *  3.protected
 *    private to same class but public to child class
 * 
 * Note:
 *   by default all instance variables and methods are public-implicit public
 *   no public classes by default
 * 
 */

class Employee {
    //public by default
    //id: number = 1;
    public id: number = 1;

    // calculate():number {
    //     return 100
    // }
    public calculate(): number {
        return 100
    }
}
let emp = new Employee()
console.log(emp.id, emp.calculate())

class AuthService {
    private password: string = "A00022"

    //access private things outside via public methods
    public getAuthInfo() {
        return this.password + this.generatePassword()
    }
    private generatePassword(): string {
        return Math.random() + "A00011#$"
    }
}
let auth = new AuthService()
// console.log(auth.password)
console.log(auth.getAuthInfo())

class Account {
    constructor() {
        console.log('Account')
    }
    //method overriding : redefining
    protected deposit(): number {
        return 100
    }
}
class SavingsAccount extends Account {
    constructor() {
        super() //call super class constructors
        console.log('Savings Account')
    }
    deposit(): number {
        return 1000 * super.deposit()
    }
}
let sb = new SavingsAccount();
console.log(sb.deposit())