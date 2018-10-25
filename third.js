let name = "shilpa"
let name = "shilpa"
undefined
let name = "     shilpa   "
VM73:1 Uncaught SyntaxError: Identifier 'name' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM73:1
name = "     shilpa   "
"     shilpa   "
name.length
14
name.trim()
"shilpa"
out = name.trim()
"shilpa"
out.length
6
name.trim().length
6
url = "https://mail.google.com/mail/u/0/#inbox"
"https://mail.google.com/mail/u/0/#inbox"
url.split("/")
(7) ["https:", "", "mail.google.com", "mail", "u", "0", "#inbox"]0: "https:"1: ""2: "mail.google.com"3: "mail"4: "u"5: "0"6: "#inbox"length: 7__proto__: Array(0)
out = url.split('/')
(7) ["https:", "", "mail.google.com", "mail", "u", "0", "#inbox"]0: "https:"1: ""2: "mail.google.com"3: "mail"4: "u"5: "0"6: "#inbox"length: 7__proto__: Array(0)
out[0]
"https:"
out[1]
""
out[2]
"mail.google.com"
out.length
7
out[7]
undefined
out[6]
"#inbox"
url = "https://mail.google.com/mail/u/0/1/#inbox"
"https://mail.google.com/mail/u/0/1/#inbox"
out = url.split('/')
(8) ["https:", "", "mail.google.com", "mail", "u", "0", "1", "#inbox"]
out[6]
"1"
out[out.length-1]
"#inbox"
out[out.length-1].replace("sent")
"#inbox"
out[out.length-1].replace("#inbox","sent")
"sent"
var sen = "i am doing javascript"
undefined
sen.replace("javascript","python")
"i am doing python"
let myname="aakash"
undefined
myname.split("")
(6) ["a", "a", "k", "a", "s", "h"]
var mytext= "hi javascript learning javascript"
undefined
mytext.search("javascript")
3
mytext.charAt(0)
"h"
mytext.charAt(10)
"i"
mytext.slice(1)
"i javascript learning javascript"
mytext.slice(5)
"vascript learning javascript"
var input = "SHilPA"
undefined
input.toLowerCase()
"shilpa"
input.toUpperCase()
"SHILPA"
var out = input.toLowerCase()
undefined
out
"shilpa"
out.charAt(0).toUpperCase()+out.slice(1)
"Shilpa"
var in = "10"
VM944:1 Uncaught SyntaxError: Unexpected token in
var ind = "10"
undefined
var ind1 = "10"
undefined
ind+ind1
"1010"
parseInt(ind)
10