//for loop 
let array=[10,20,30,40]//this is array and this values
for (let index = 0; index < array.length; index++) {//for loop
    const element = array[index];
    if (element==30) {
        console.log("found number");
        
    }
    console.log(element);
}
// console.log(element);//element is not Accessible scope of element is block level
//nested loop 
for (let index = 0; index <2; index++) {
    for (let j = 0; j <10; j++) {//nested for loop
      
        console.log("inner loop");
      
    }
    console.log("outer loop");  
}
//we print the table using js for loop
for (let index = 1; index <=10; index++) {
    for (let j = 1; j <=10; j++) {//nested for loop
      
       console.log(index+" * "+j+" = "+index*j);  
    }  
}
//break and continue keyword

for (let index = 0; index <=10; index++) {
    if (index==6) {
        console.log("Detected 6");
        break;
    }
    console.log(index);
    
}//output---->0
// 1
// 2
// 3
// 4
// 5
// Detected 6
//continue keyword
for (let index = 0; index < 10; index++) {
    if (index==5) {
        console.log("detected 5");
        continue
        
    }
    console.log(index);
    
}
// output--->0
// 1
// 2
// 3
// 4
// detected 5
// 6
// 7
// 8
// 9


