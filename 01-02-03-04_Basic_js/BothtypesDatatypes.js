//primitive
//7 types : -String Number, null,undefined, BigInt,Boolean,Symbol(unique value)
const string="Abhishek Ghadage";//string datatype
const number=135252//number datatype
const temp=null//null datatype
const fl=12420.02;//float datatype
let email;//undefined datatype
let a=Symbol('123');//symbol datatype
let b=Symbol('123')//symbol datatype

let bignumber=33639366389369;//big int datatype
console.log(a===b)//strict operator for check the datatype and value is equal or not


//referece type (non primitive datatypes)
//Theere are three types of non primitive datatypes
// 1.Array 2.function3.object

const heros=["Abhi","Rohan","Rahul"];//this is array datatype

{//this is object datatypes
    name:"Abhishek";
    age:22;
}
//this is a function datatype here we can use the function as a datatype

const myFunction=function(){
    console.log("I am a function datatype");
    
}
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof name);

console.log(typeof null);//type of null is object 
console.log(typeof bignumber);
