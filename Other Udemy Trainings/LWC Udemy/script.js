
// var keyword - is global and function level, but not block level
var course = "var - zero to hero"
console.log(course)
course = "zero to hero in lwc"

//can redeclare a variable
var course = "zero to hero in lwc part 2"
console.log(course)

console.log(window)
console.log(window.course)

function sampleDoVar(){
    var anotherCourse = "hero in lwc, var inside function"
    console.log(anotherCourse) // this won't work outside the funtion, throws error
}

sampleDoVar()

//block scope
if(true){
    var x = 10 //gets appended into window
    console.log(x)
}
console.log(window.x)
console.log(x)

// let keyword - can be updated and can also be re-declared
// supports function and block level scope, but not window scope
let letCourse = "let - zero to hero"
letCourse = "let - zero to hero in lwc part 2"
console.log(letCourse)
console.log(window.letCourse) // will display undefined

//can't redeclare a variable
//let letCourse = "let - zero to hero in lwc part 3"
//console.log(letCourse)