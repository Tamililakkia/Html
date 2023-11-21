let name = "This is Javascript class"
console.log(name)
let num=40;
let arr =[40,"Tamil",name]
console.log(arr[0])
let obj = {
    name: "Tamil",
    course: "javascript"
}
obj["Batch"]="8am"
console.log(obj)
// Oprators
console.log("Arithmetic Operator")
console.log(num+10)
console.log(num-5)
console.log(num*5)
console.log(num/5)
console.log(num%5)
console.log("Logical Operator")
console.log(10==5)
console.log(10>4)
console.log("Comparison Operator")
console.log(10<5 && 7==8)
console.log(10!=5 || 9<6)
console.log("Ternary Operator")
console.log(10<5 ? num+5 : num-5)
// Loops
console.log("for loop")
for(let i=0;i<arr.length;i++)
{
    num=num+10;
    console.log(num)
}
console.log("while loop")
let y=0;
while(y<arr.length)
{
    console.log(arr[y])
    y++
}
console.log("if loop")
if(num!=0)
{
    console.log(num)
}else
    console.log("condition fail")