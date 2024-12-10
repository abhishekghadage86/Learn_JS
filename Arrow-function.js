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



//++++++++++++++++++++++++++++++++++++++++Arrow Function+++++++++++++++++++++++++++++++++++++++++++
