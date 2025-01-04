//for each loop in js
const coding=["c","c++","Java","Html","css"]

//now we use for each loop
coding.forEach(function (val){console.log(val);//here the val is consumer 
});
console.log("==============================");

console.log("This is arrow function output");

//now we write the arrow function 
coding.forEach((val)=>console.log(val));
console.log("==============================");
function myFun(item)
{
    console.log(item);
    
}
coding.forEach(myFun);//we pass paramater as funtion
console.log("==============================");

// Object in Array
const obj=[
    {
        "language":"java",
        "extention":".java"
    },//here we define the object in array
    {
        "language":"c++",
        "extention":".cpp"
    },
    {
        "language":"Html",
        "extention":".html"
    }
]
//now we print here objects in array
obj.forEach((item)=>{
    console.log(item.language);
    console.log(item.extention);
    
    
})
