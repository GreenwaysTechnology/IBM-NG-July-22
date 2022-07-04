//Abstract classes =  interfaces + normal class

abstract class Account {
    abstract desposit(): number;
    getBankInfo() {
        return 'HDFC Bank Ltd'
    }
}
class SavingsAccount extends Account {
    desposit(): number {
        return 100
    }
}
let sb =new SavingsAccount()
console.log(sb.desposit(),sb.getBankInfo())