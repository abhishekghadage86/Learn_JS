// there are tow types of memory 
//stack-->it is used for primitive datatypes stack or primitive variable are share the only copy 

//heap---> it is another type memory storage.it is used for non primitive data type this is share the reference of variable 
//so change the original data or values


// below is a primitive and stack datatype
const Name="Abhishek";
let userName=Name;//we can share only copy
console.log(userName);
userName="Rohan Patil"
console.log(userName);



//non primitive datatype
let userOne=
{
name:"Abhi",
age:20,
}

let userTwo=userOne;

userTwo.age=50
console.log(userOne.age);
console.log(userTwo.age);

