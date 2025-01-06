const Arr=[10,20,30,40,50,60,70,80]
// const newArr=Arr.map((num)=>num+10);
// there another way for map with return keyword

const newArr =Arr.map((num)=>{//when we open the curly brace we need to write the return statement
    return num+10
})


console.log(Arr);
console.log(newArr);
//method chaining using map and filter method
const Array=[1,2,3,4,5,6,7,8,9]
let NewArray=Array.map((num)=> num*10).map((num)=>num+1)
console.log(NewArray);
 NewArray=Array.map((num)=> num*10).map((num)=>num+1).filter((num)=>num>30)//mehtod chaining with filter and map method
 console.log(NewArray);
 