import { firstName, lastName } from "./mylib";
import { OrderService } from './services/order.service';
console.log(firstName, lastName);
let orderService = new OrderService();
console.log(orderService.findAll());
