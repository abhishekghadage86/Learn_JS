const marvelHeros=["Ironman","Thor","Spiderman"]
const dcHeros=["Flash","batman","superman"]

console.log(marvelHeros);
console.log(dcHeros);

// marvelHeros.push(dcHeros)//create the aaray within the array 
const newArr=marvelHeros.concat(dcHeros)
console.log(marvelHeros);

//now we see the spread operation in js
console.log("======================Spread opration====================================");

const spNewArr=[...marvelHeros,...dcHeros]
console.log(spNewArr);
console.log("==========================================================");

console.log("======================flat opration====================================");
const num=[1,2,3,[4,5,6],7,[1,2,[3,4]]]
console.log(num);
//now we perform the flate opertion in this op we convert or combine the sub array value in one array
const flateNewArr=num.flat(Infinity)
console.log(flateNewArr);
console.log("==========================================================");


//convert the array

console.log(Array.isArray("num"));//false
console.log(Array.from("num"));//[ 'n', 'u', 'm' ]

const score1=100
const score2=200
const score3=300
console.log(Array.of(score1,score2,score3));


