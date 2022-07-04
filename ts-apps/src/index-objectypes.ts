/**
 * 
 * Object creation:
 *  1.using constructor pattern - classes
 *  2.using literal pattern 
 * 
 * Object types:
 *   1.class as object type
 *   2.interface as object
 *   3.type keyword
 */

// class Product {
//     //required fields 
//     id: number
//     name: string
//     //optional fields
//     qty?: number
//     inStock?: boolean
// }

// interface Product {
//     //required fields 
//     id: number
//     name: string
//     //optional fields
//     qty?: number
//     inStock?: boolean
// }
type Product = {
    //required fields 
    id: number
    name: string
    //optional fields
    qty?: number
    inStock?: boolean
}
// let product: Product = {
//     id: 1,
//     name: 45,
//     qty: 100,
//     inStock: true
// }
let product: Product = {
    id: 1,
    name: 'phone',
    qty: 100,
    inStock: true
}
let product1: Product = {
    id: 1,
    name: 'phone'
}