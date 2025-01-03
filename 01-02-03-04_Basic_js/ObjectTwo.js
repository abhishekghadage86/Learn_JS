//constructor (singleton object create method)

const jsUser=new Object()
console.log(jsUser);//empty object
jsUser.id=122
jsUser.name="Abhishek"
jsUser.Email="abc@gmail.com"
jsUser.Phone="8600944392"


console.log(jsUser);//sinleton object print

console.log("===============================================================");

//now we create the object within object

const regularUser={
    Email:"Abhi@gmail.com",
    age:22,
    fullName:{
        userName:{
            firstName:"Abhishek",
            lastName:"Ghadage"
        }

    }
}
console.log(regularUser);//print the regular user data
console.log(regularUser.fullName);//print user full name object
console.log(regularUser.fullName.userName.firstName);//print sub object first name

console.log("===============================================================");


//now we discuss the object combining 
const obj1={1:"A",2:"B",3:"C"}
const obj2={1:"A",2:"B",3:"C"}
//below operation is combine  two or more objects with help of spread method syntax--->const obj={...obj1,obj2,....objN}
const obj3={...obj1,...obj2}
console.log(obj3);
//below operation is combine the two or more object using assign({},obj1,obj2....)
const obj4=Object.assign({},obj1,obj2)
console.log(obj4);
//array of Objects in javascript this is used in database retrive file
const user=[
    {
        id:1,
        name:"Abhi"
    },
    {
        id:1,
        name:"Rohan"
    }
    ,
    {
        id:1,
        name:"rahul"
    }
    
]
//if we want to print the array first or other objects
console.log(user[1].name);

