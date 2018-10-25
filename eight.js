var a = [3,5,7,"hhh",7,9,3]

for(i=0; i<a.length; i++){
  console.log(a[i])
}


for(i=0; i<10; i++){
  console.log(i)
}

for(i=10; i=>0 ;i--){
  console.log(i)
}


var letters = '0123456789ABCDEF'
var color = "#"

for(var i =0; i<6; i++ ){
  color +=  letters[Math.floor(Math.random() * 16)]
}

console.log(color)


var name = "shilpa"
var reverse2 ;

for(i=name.length+1;i>0;i--){
    reverse2 += name[i]
}

console.log(reverse2)


var a = 10
var b = "my age is "+a
var c = `my age is ${a}`



for(i=10;i>0;i--){
  console.log(i)
}