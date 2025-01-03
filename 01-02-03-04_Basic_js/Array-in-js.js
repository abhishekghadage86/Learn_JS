//array in js

// console.log(years["2"] !== years["02"]);

const myArr=[0,1,2,3,4,5]//number array
console.log(myArr);
 
const myHeros=["Abhishek","Rohan"]
console.log(myHeros);

myArr.push(9);
myArr.pop()
myArr.unshift(9)
myArr.shift()
console.log(myArr);

//when we check the element prsent in array when we get answer in true or false
console.log(myArr.includes(2))//it return true or false
console.log(myArr.indexOf(2));//it return -1 or index of element

let newArr=myArr.join()//convert the array in string
console.log(newArr);

console.log("=================================================================");

//now we see the slice and splice method in js
console.log("A",myArr); //output is A [ 0,1, 2, 3 4, 5 ]
console.log(myArr.slice(1,3));//output is [ 1,2 ]

console.log("B",myArr); //output is c [ 0,1, 2, 3 4, 5 ]
console.log(myArr.splice(1,3));//output is [ 1,2,3 ]
//splice method is manipulate the main array 
console.log("c",myArr); //output is c [ 0, 4, 5 ]



