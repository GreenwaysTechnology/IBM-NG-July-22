/**
 * dependency injection and encapuslation modifier-private and public
 */

class OrderService {
    constructor() { }
    findAll() {
        return 'Orders'
    }
}

//version - 1 : without code refactoring 
// class OrderController {
//     //instance variable: has-a
//     orderService: OrderService
//     //orderSerivce inside constructor arg is local variable
//     constructor(orderService: OrderService) {
//         //instance variable = localvariable
//         this.orderService = orderService
//     }
//     findAll() {
//         return this.orderService.findAll()
//     }
// }

// class OrderController {

//     //orderSerivce inside constructor arg is local variable
//     /**
//      * 
//      * constructor arg local variable can be converted into instance variable
//      * by adding private or public keyword
//      */
//     constructor(private orderService: OrderService) {
//         //instance variable = instancevariable
//         this.orderService = orderService
//     }
//     findAll() {
//         return this.orderService.findAll()
//     }
// }


class OrderController {

    //orderSerivce inside constructor arg is local variable
    /**
     * 
     * constructor arg local variable can be converted into instance variable
     * by adding private or public keyword
     * 
     * if instance variables and arg variable both are same means, we can remove that 
     */
    constructor(private orderService: OrderService) { }

    findAll() {
        return this.orderService.findAll()
    }
}
/////////////////////////////////////////////////////////////////////////////////////

// class Product {
//     id: number = 1
//     name: string = "phone"
//     price: number = 0;
//     inStock: boolean = false
//     constructor(id: number = 1, name: string = "phone", price: number = 0, inStock: boolean = false) {
//         this.id = id;
//         this.name = name;
//         this.price = price
//         this.inStock = inStock
//     }
// }
class Product {
    constructor(public id: number = 1, public name: string = "phone", public price: number = 0, public inStock: boolean = false) {  }
}



function main() {
    let orderCtrl = new OrderController(new OrderService())
    console.log(orderCtrl.findAll())

    //  let orderCtrl2 =new OrderController(new PaymentService())

    let product = new Product()
    console.log(product.id, product.name)
}
main()
