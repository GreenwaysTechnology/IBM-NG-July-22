//variables are declared using either let or const.

/**
 * syntax :
 *  let variableName:datatype = literal(value)
 * 
 */
//strings - "",'',``(back tick and interpolation)

let firstName: string = "Subramanian"
console.log("first Name", firstName)
//reinitalize with numbers
//firstName = 100
//back tick notation: concatnation

//es 5
console.log("first Name" + firstName)
console.log("first Name", firstName)
//es 6
console.log(`First Name  ${firstName} `)
//back tick notation: multi line :es 5
let template:string = "<html> " +
    "<body>" +
    "</body>" +
    "</html>"
//es 6 
let template1:string = `
    <html>
    <body>
    </body>
    </html

`
