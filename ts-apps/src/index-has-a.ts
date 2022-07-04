/**
 * Hierachy : the relationship between classes
 * 1.has-a - or composition
 *      Dependency injection -  injecting object another object
 * 2.is-a  - inheritance
 */

//has-a 

class OrderService {
    constructor() { }
    findAll() {
        return 'Orders'
    }
}

class PaymentService {

}

class OrderController {
    //instance variable: has-a
    orderService: OrderService
    constructor(orderService: OrderService) {
        this.orderService = orderService
    }
    findAll() {
        return this.orderService.findAll()
    }
}
function main(){ 
    let orderCtrl = new OrderController(new OrderService())
    console.log(orderCtrl.findAll())

  //  let orderCtrl2 =new OrderController(new PaymentService())
}
main()