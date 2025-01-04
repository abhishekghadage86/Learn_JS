//for of loop 

[" "," "," "]//String array
[{},{},{}]//array of objects
//this same like the enhance for loop with  number array
const arr=[10,20,30,40,50]
for (const value of arr) {
    console.log(value); 
}
// const greeting="Abhishek Ghadage"//this is convert the string in char array
// for (const element of greeting) {
//     console.log(`Value is ${element}`);
    
// }

//Map
const map=new Map();
map.set(1,"Abhi")
map.set(2,"Abhi")
map.set(3,"Abhi")
map.set(4,"Abhi")
map.set(1,"Abhi")

for (const element of map) {
    console.log(element);
}
//this map destructuring with help of for of loop
for (const [key,value] of map) {//object can work with the for in loop
    console.log(key +":-"+value);
    
}

//we try to destruturing the Object then we got a error is TypeError: myObj is not iterable
const myObj={
    1:"Abhi",
    2:"Rahul",
    3:"Rahul"

}

// for (const [element,value] of myObj) {
//     console.log(element +":-"+value);
    
// }
