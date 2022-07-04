//course decorator
// function Course(target: any) {
//     Object.defineProperty(target.prototype, "subject", { value: 'Typescript' })
// }
function Course(courseInfo: any) {
    return function(target:any){
        Object.defineProperty(target.prototype, "courseInfo", { value: courseInfo })
    }
}

class StudentType {
    firstName:string;
    lastName:string;
    subject:string
}

@Course({
    id:'100',
    name:'Angular',
    duration:'40 hrs',
    instructorName:'subramanian'
})
class Student {
    constructor(public firstName: string = "Subramanian", public lastName: string = "Murugan") { }
}
let student = new Student() as StudentType
console.log(`${student.firstName} ${student.lastName} ${student.courseInfo.name} ${student.courseInfo.duration}`)