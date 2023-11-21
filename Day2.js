// Switch
console.log("switch....")
switch ("addAndSub")
{
    case "addAndSub":
        console.log("addAndSub",10+20)
        break;
    case "addAndMul":
        console.log("addAndSub",10*20)
        break;
    case "Division":
        console.log("addAndSub",30/20)
        break;
    default:
        console.log("invalid option is selected")
        break;
}
// Loops
console.log("Advanced for loop....")
let array1 = [1,"Tamil","frontend","8am batch"]
for(let element of array1)
{
    console.log(element)
}
console.log("do while loop.....")
let y=0;
do{
    console.log(array1[y])
    y++
}while(y>array1.length)
console.log("for in loop....." )
let obj = 
{
    name: "vicky",
    course:"java"
}
for (let o in obj)
{
    console.log(o)
    console.log(obj[o])
}
// Inbuild methods
console.log("inbuld methods.....")
console.log("predefined methods....")
let str = "This is javascript class"
console.log("string to array conversion")
let strToArray=str.split(" ")
console.log(strToArray)
console.log("string length...",str.length)
console.log("uppercase....",str.toUpperCase())
console.log("lowercase....",str.toLowerCase())
console.log("charAt.....",str.charAt(6))
console.log("includes.....",str.includes("class"))
console.log("slice.....",str.slice(3,15))
console.log("slice negative values.....",str.slice(-9,-1))
console.log("substring......",str.substring(3,7))

let str1="hel"
console.log("padStart....",str1.padStart(6,"h"))
console.log("padEnd.....",str1.padEnd(7,"hii"))

let str2=" hel"
console.log("trim.....",str2.trim()==str1)
console.log("concat.....",str1.concat("hii"))
console.log("repeat.....",str1.repeat(3))
console.log("startswith....",str1.startsWith("he"))

console.log("string search Methods....")
console.log("Indexof.....",str1.indexOf("e",1))
console.log("lastIndexof....",str2.lastIndexOf("e"))