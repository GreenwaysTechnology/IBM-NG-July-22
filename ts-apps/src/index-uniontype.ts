//union type : a variable can hold one or more data types /values.

function mode(varient: "dark" | "light") {
    console.log(varient)
}

mode("dark")
mode("light")
// mode("red")
function Person(gender: "Male" | "Female" | "Third" | undefined, active: true | false) {
    console.log(gender, active)
}
Person("Female", true)
Person("Male", false)
Person(undefined, false)

function PrintId(id: string | number | undefined) {
    console.log(id)
}
PrintId("1");
PrintId(1);
PrintId(undefined)
// print(true)

function PrintIdV2(id: string | number | undefined) {
    //console.log(id.toUpperCase())
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    } else {
        // Here, id is of type 'number'
        console.log(id.toFixed());
    }
}
PrintIdV2("abc");
PrintIdV2(17867.67);
