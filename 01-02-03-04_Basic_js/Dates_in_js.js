let myDate=new Date()
console.log(myDate);//output---2024-12-05T13:44:25.545Z
console.log(myDate.toDateString());//output---> Thu Dec 05 2024
console.log(myDate.toISOString());//output-->2024-12-05T13:45:51.549Z
console.log(myDate.toJSON());//output-->2024-12-05T13:45:51.549Z
console.log(myDate.toLocaleDateString());//output--->5/12/2024
console.log(myDate.getDate());//it is used for get date
console.log(myDate.toLocaleString());//5/12/2024, 7:18:54 pm
console.log(myDate.toLocaleTimeString());//7:19:39 pm
console.log(myDate.toString());

console.log("==============================================================");
//this method to create the date 
// let createDate=new Date(2023,0,25)
// let createDate=new Date(0,12,2023)
// let createDate=new Date(2023,0,25,3,5)
let createDate=new Date("2023-01-25")

console.log(createDate);
console.log("==============================================================");
//when we want see extact time we use below method
 let myTimeStamp=Date.now();
 console.log(myTimeStamp);
console.log(createDate.getTime());
//this below formula is used to convert time in second
console.log(Date.now()/1000)//this is seconds

console.log(Math.floor(Date.now()/1000))//this is seconds and add the math function for decimal values

console.log("==============================================================");

let newDate=new Date()
console.log(myDate);
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getHours());
console.log(myDate.getFullYear());

console.log(myDate.getMonth());


//this is the coustomize the date format
let x=newDate.toLocaleString('default',{
    month:"2-digit"//press ctrl+space button for more option
})
console.log(x);










