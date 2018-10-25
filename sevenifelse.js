10 == 10
true
let a = 10
undefined
a
10
"10"==10
true
"10"===10
false


console.log("hiii")
VM170:1 hiii
undefined
alert("hiii")
undefined
prompt()
""
var a = prompt()
var b = prompt()
undefined
b
"hiiii"
confirm()
true
confirm("are you sure")
true
confirm("are you sure")
false

var input = prompt("please enter number")

if(input%2 == 0){
    alert("number is even")
}else{
    alert("number is odd")
}

var input = prompt("please enter 2 digit number")
var luck = Math.floor(Math.random()*100)
if(input == luck){
    alert("you win")
}else{
    alert("You loose random number generted is"+luck)
}


var input1 = prompt("please enter first number")
var input2 = prompt("please enter second number")
var op = prompt("please enter operator")
if(op == "+"){
    if(typeof(input)=="string"){
        alert(input1+input2)
    }else{
        alert(parseInt(input1)+parseInt(input2))
    }
}else if(op == "-"){
    alert(input1 - input2)
}else{
    alert("sorry wrong input")
}


we have array of user 
var user = ["shilpa", "john", "tifnney", "array"]

we take the input from the user
var input1 = prompt("please enter name")

if user is present in the array console.log("allow access")
else push value in the array
and console.log() new array

if(){

}
else{
    user.push(input1)
    console.log(user)
}