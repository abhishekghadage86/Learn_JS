//This program is for truthy values 

let num=10;//this is a truthy value
if (num) {
    console.log("true");
}
else{
    console.log("false");
    
}
// falsey values---->"0",'false',1,[],{}," ",function(){}
//truhty values ---->0,-0,BigInt,"",null,undefined,NaN
const arr=[]
if (arr.length==0) {//this is a empty array
    console.log("true");
    
} else {
    console.log("false");
}

//empty Object
const obj={}
if (Object.keys(obj).length===0) {
    console.log("Empty object");
    
} else {
    console.log("This is not empty object");
    
}
//nullish coalescing operator (??):--->
// basicaaly it is used for null and undefined values
let no;
// no=10??15;
no=null ?? 100
no=undefined ?? 100 ?? 200
console.log(no);

