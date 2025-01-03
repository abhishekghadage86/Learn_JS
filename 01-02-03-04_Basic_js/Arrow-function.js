//============================this keyword=========================================''
const user={
    uname:"Abhishek",
    age:20,welcomeMessage:function()
    {
        console.log(`${this.uname} welcome in website`);//when we add this.uname that time acess the the current context
        console.log(this)
    }
}
user.welcomeMessage //welcomeMessage is a method so we need to write the simple brases
user.welcomeMessage()
console.log("===================================================");
   
user.uname="sam";//here we change the value of uname
user.welcomeMessage()
console.log("===================================================");
console.log(this);//it is print the empty object 

console.log("++++++++++++++++++++++++++++++++++++++++||---Arrow Function---||+++++++++++++++++++++++++++++++++++++++++++")
// function chai()
// {
//     let uname="Abhishek"
//     console.log(this.uname)
// }
// function chai()
// {
//     let uname="Abhishek"
//     console.log(this.uname)//op is undefined
// }
// chai()

// let chai=function()
// {
//     const uname="Abhi"
//     console.log(this.uname);//op is undefined
    
// }

//this is arrow function 
let chai= ()=>{
    const uname="Abhi"
    console.log(this.uname);//op is undefined
    
}
chai();

// const addTwo=(num1,num2)=>{
// return num1+num2
// }
// console.log(addTwo(10,20));

//this is another or code reduce tech  type of arrow function
const addTwo=(num1,num2)=> num1+num2
    console.log(addTwo(10,20));


 //=======================-----Object pass or return in arrow function---===========================
 
 const firstObj=()=>{userName:"Abhishek";age:20};//op is undefined this is error of this program simple brace is reqired always
 const firstObj1=()=>({userName:"Abhishek",age:20})


 console.log(firstObj());
 console.log(firstObj1());
 