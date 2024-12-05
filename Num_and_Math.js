
//this is a first method to declare the number
const score=400//in this we can insert the number string and other value it is accept all values
console.log(score);
console.log(typeof score)

//this is another type of number declration in this method we can insert only numbers
const number=new Number(400);//it is accept only number format values
console.log(number);
console.log(typeof number);//we declare the variable with new keyword then it is treat like object

console.log(number.toString().length);//output  3
console.log(number.toFixed(2));//output is 400.00
const num=new Number(123.5898)
console.log(num.toPrecision(3));//output is 124.convert the value in round of

const loc=new Number(10000000)
console.log(loc.toLocaleString('en-IN'));//convert the number like that 1,00,00,000 in indian format read

//max and min method present in js (range of number store in variable of Number type)


console.log("========================================================");

//+++++++++++++++++++++++++++++++++++maths+++++++++++++++++++++++++++++
 console.log(Math);//math is object it has different methods in math object

 console.log(Math.abs(-12));//covert the negative value in positive
 console.log(Math.round(12.6));//round of the value of given value
 console.log(Math.ceil(4.2));//
 console.log(Math.floor(4.9));
 console.log(Math.min(12,9,5,6));//minimum value
 console.log(Math.max(12,9,23,1,3));//maximum value
   console.log(Math.random());//random method value always between in 0 and 1
   console.log((Math.random()*10+1));//random method value always between in 0 and 1
   console.log(Math.floor(Math.random()*10+1));//random method value always between in 0 and 1

//this is line number 36 systematic syntax
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min)+1)+min);

   


 
 
 
 
 







