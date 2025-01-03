//now we discuss the function 
function show()
{
    console.log("This is a degault function")
}
show();
function addNumber(num1,num2)
{

    console.log(num1+num2)
} 
addNumber(2,3)
function addNumber(num1,num2)
{
    return num1+num2;
    console.log(num1+num2)
}
const result=addNumber(2,3)
console.log(`result is ${result}`);
//user login message
function userMessage(uname="sam")//assign the default value
{
 return `${uname} login sucessfully`;
}
// console.log(userMessage("Abhishek"))
console.log(userMessage())//passs the empty function
//Pass infinte value in function and with the spread and rest operator
function show(...num1)
{
    return num1
}

console.log(show(100,200,300,400));

//this is a another example of infinte value input
function showVal(val1,val2,...num1)
{
    return num1
}

console.log(showVal(100,200,300,400));

//pass the the object in function 
const user={
    name:"Abhishek",
    age:23
}
function userDetails(anyobject){
    return `My age is ${anyobject.age} `;
}
// console.log(userDetails(user));
console.log(userDetails({uname:"Abhi",age:50}));

//pass the array in funtion
// first we create the Array
const myArray=[100,200,300,400,500]
function showArray(getArray)
{
    return getArray[2]
}
// console.log(showArray(myArray));
// this is a another type of pass the array in function
console.log(showArray([1000,2000,3000,4000]));

