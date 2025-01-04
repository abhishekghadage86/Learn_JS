//object 
const myObj=
{
    1:"java",
    2:"C++",
    3:"Javascript",
    4:"java",
    5:"C++",
    6:"Javascript",
}
for (const [key,value] in myObj) {
    console.log(key+":-"+value);
    
}
// output-->1:-undefined
// 2:-undefined
// 3:-undefined
// 4:-undefined
// 5:-undefined
// 6:-undefined
for (const key in myObj) {
    // console.log(key + myObj[key]);
    console.log(`key ${key} is ${myObj[key]}`);
    
}
// output--->
// key 1 is java
// key 2 is C++
// key 3 is Javascript
// key 4 is java
// key 5 is C++
// key 6 is Javascript


//for in loop with the array printing
const number=[10,20,30,40,50,60,70,80,90,100]
for (const key in number) {
    //  console.log(key);//op-->0,1,2,3,4,5.....
     console.log(number[key]);
}

const map=new Map()
map.set(1,"Abhi")
map.set(2,"Abhi")
map.set(3,"Abhi")
map.set(4,"Abhi")
map.set(5,"Abhi")
//map iteration using for in loop but map not itreable with for in loop
for (const key in map) {
    console.log(key);
    
}