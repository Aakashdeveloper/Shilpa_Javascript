var city= ["london","newyork", "amsterdam"]

var randonval = ["london", 10, true, 19, "hiii"]
var city= ["london","newyork", "amsterdam"]
undefined
city
(3) ["london", "newyork", "amsterdam"]
typeof(city)
"object"
city[0]
"london"
city[1]
"newyork"
city[2]
"amsterdam"
city.length
3
var randonval = ["london", 10, true, 19, "hiii"]
undefined
var name = "shilpa"
undefined
name.split("")
(6) ["s", "h", "i", "l", "p", "a"]
var out = name.split("")
undefined
out[0]
"s"

var city= ["london","newyork", "amsterdam"]
undefined
city.push("delhi")
4
city
(4) ["london", "newyork", "amsterdam", "delhi"]
city.pop()
"delhi"
city.pop()
"amsterdam"
city
(2) ["london", "newyork"]
city.unshift("helsinki")
3
city
(3) ["helsinki", "london", "newyork"]
city.shift()
"helsinki"
city.push("delhi")
3
city.push("amsterdam")
4
city
(4) ["london", "newyork", "delhi", "amsterdam"]
city.slice(1,3)
(2) ["newyork", "delhi"]
city
(4) ["london", "newyork", "delhi", "amsterdam"]
city.splice(2,0,"helsinki","paris")
[]
city
(6) ["london", "newyork", "helsinki", "paris", "delhi", "amsterdam"]
city.splice(2,1,"brisbane","venice")
["helsinki"]
city
(7) ["london", "newyork", "brisbane", "venice", "paris", "delhi", "amsterdam"]




var name = "s"

var out = name.toLowerCase()
undefined
out
"shilpa"
out.charAt(0).toUpperCase()
"S"
out.slice(1)
"hilpa"
out.charAt(0).toUpperCase()+out.slice(1)
"Shilpa"