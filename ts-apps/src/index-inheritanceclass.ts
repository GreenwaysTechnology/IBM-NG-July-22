/**
 * inheritance : code resue
 * implmentation:
 * 1.using normal classes
 * 2.using interface
 * 3.using abstract class
 */

class Account {
    constructor() {
        console.log('Account')
    }
    //method overriding : redefining
    deposit(): number {
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