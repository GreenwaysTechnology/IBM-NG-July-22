//course decorator
// function Course(target: any) {
//     Object.defineProperty(target.prototype, "subject", { value: 'Typescript' })
// }
function Course(subject: string) {
    return function(target:any){
        Object.defineProperty(target.prototype, "subject", { value: subject })
    }
}

class StudentType {
    firstName:string;
    lastName:string;
    subject:string
}

@Course('Angular')
class Student {
    constructor(public firstName: string = "Subramanian", public lastName: string = "Murugan") { }
}
let student = new Student() as StudentType
console.log(`${student.firstName} ${student.lastName} ${student.subject}`)