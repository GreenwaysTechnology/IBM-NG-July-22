//Decorators = Annotations//@
//steps
//1.create decorator
//2.apply decorator on your biz logic(class,methods,fields)


//course decorator
function Course(target: any) {
    console.log(target)
    Object.defineProperty(target.prototype, "subject", { value: 'Typescript' })
}

//biz class :
//req: I want course information, i dont want to keep course information inside class
// course information i am going to give as decorator

class StudentType {
    firstName:string;
    lastName:string;
    subject:string
}

@Course
class Student {
    constructor(public firstName: string = "Subramanian", public lastName: string = "Murugan") { }
}
let student = new Student() as StudentType
console.log(`${student.firstName} ${student.lastName} ${student.subject}`)