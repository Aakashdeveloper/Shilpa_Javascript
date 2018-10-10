string= "shilpa" 'shilpa' shilpa "10" "true"
number = 90
boolean= true/false

char name= 'shilpa'
int
bool
===========================
Es5(Ecma Script)
var a = 10
var b = "shilpa"
var c = true

/////////
var a = "shilpa"
undefined
a
"shilpa"
typeof(a)
"string"
var b = 10
undefined
typeof(b)
"number"
var c = true
undefined
typeof(c)
"boolean"
var d = "10"
undefined
typeof(d)
"string"
////////

ES6
/////
var z = 10
undefined
var z = 11
undefined
let y = 10
undefined
y
10
let y = 11
VM292:1 Uncaught SyntaxError: Identifier 'y' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM292:1
y = "shilpa"
"shilpa"
y
"shilpa"
const r = "shipla"
undefined
r
"shipla"
const r = "aakash"
VM361:1 Uncaught SyntaxError: Identifier 'r' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM361:1
r
"shipla"
r = "aakash"
VM382:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:3
//////