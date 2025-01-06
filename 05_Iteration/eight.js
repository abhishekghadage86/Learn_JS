const Array=[1,2,3,4,5]
const sum=Array.reduce((Acc,num)=>num+Acc,0)//we can  perform reduce operation using arrow function here 0 is initial value
console.log(sum);

const SumArr=Array.reduce((acc,currVal)=>
{
    console.log(`Accumaltor is ${acc} and current value ${currVal}`);
   return  acc+currVal

},0);//here is a starting or initial value is zero
// output is Accumaltor is 0 and current value 1
// Accumaltor is 1 and current value 2
// Accumaltor is 3 and current value 3
// Accumaltor is 6 and current value 4
// Accumaltor is 10 and current value 5

const Cart=[
    {
        course:"js",
        price:299
    },
    {
        course:"py",
        price:2299
    },
    {
        course:"java",
        price:2199
    },
    {
        course:"jsp",
        price:1299
    }
]
console.log("==========================================");

const pay=Cart.reduce((acc,item)=>item.price+acc,0)
console.log("Total money pay for above course is "+pay);
