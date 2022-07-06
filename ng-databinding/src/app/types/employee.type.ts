import { Address } from "./address.type"
import { Experience } from "./experience.type"

export class Employee {
    id: number = 0
    name!: string
    status: true | false = false
    salary: number = 0.0
    gender?: "Male" | "Female" | "Third" = "Male"
    address!: Address
    education?: string[]
    experience?: Experience[]
}