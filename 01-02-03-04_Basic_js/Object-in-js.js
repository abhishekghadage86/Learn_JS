//Objects in javascript--->object declration has two types
//1.literal  2.constructor

//1.literal type now we discuss it

const obj={
    name:"Abhishek",
    age:20,
    "Address":"pune",//here address is key and key is always string
    marks:500
}
console.log(obj.name);
console.log(obj["Address"]);

//now we create object of symbol and print it
let sym=Symbol("Abhi")
const jsUser={
    name:"Abhishek",
    [sym]:"Key",
}
console.log(jsUser[sym]);//key
console.log(jsUser.sym);//undefined


//without [] output is--->{ name: 'Abhishek', sym: 'Key' }
//with [] output is-->{ name: 'Abhishek', [Symbol(key)]: 'Key' }

console.log(jsUser);

obj.age=50
console.log(obj);
// Object.freeze(obj)
obj.age=100
console.log(obj);

obj.greeting=function()
{
    console.log("Hello js user");
    
}
console.log(obj.greeting);//[Function (anonymous)]
console.log(obj.greeting());

obj.greetingTwo=function()
{
    console.log(`Hello js user ${this.name}`);
    
}
console.log(obj.greetingTwo());







