//interfaces
interface Init {
    init(): void
}
interface Destory {
    destroy(): void
}
class OrderService implements Init, Destory {
    //overriding
    init(): void {
        console.log('init')
    }
    destroy(): void {
        console.log('destryo')

    }
}

class Payment implements Init, Destory {
    //overriding
    init(): void {
        console.log('init')
    }
    destroy(): void {
        console.log('destryo')

    }
}
let orderService = new OrderService()
orderService.init()
orderService.destroy()