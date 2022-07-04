//arrays

//this is not type safe array
let list = [1, 2, 3, "Hello", true]

//type safe array
// let numList: number[] = [1, 2, 3, 4 ,"hello"]
let numList: number[] = [1, 2, 3, 4]
//using generics syntax - <Type>
let nameList: Array<string> = ["a", "b"]

//customer array
class Customer {
    id: number
    name: string

}

let customers: Array<Customer> = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
]