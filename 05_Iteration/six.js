//filter method for objects in array
const books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      year: 1960,
      price: 399
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      year: 1949,
      price: 299
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic",
      year: 1925,
      price: 499
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Young Adult",
      year: 1951,
      price: 349
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      year: 1937,
      price: 599
    }
  ];
  
  let userBook=books.filter((bk)=>bk.price>=400)
  console.log(userBook);
  console.log("=========This is a statement with retrun values============");
  
  userBook=books.filter((bk)=>
{
    return bk.genre==="Fantasy"
})
console.log(userBook);

userBook=books.filter((bk)=>
    {
        return bk.genre==="Fantasy" || bk.author==="The Hobbit"
    })
    console.log(userBook);
  let demo=books.filter((bk)=>bk.year>=1900)
  console.log(demo);
  

  //filter method with array
  const arr=[10,20,30,40,50]
  const User1=arr.forEach((num)=>num>30)
  console.log(User1);//output is ===>undefined
  //forecach mehtod  does not any value so we use the filter methods filter method return the values
//syntax===>
    let user=books.filter((bk)=>bk.author)
//this is print return value==>console.log(user)

let arr1=[];  
const num=[10,20,30,40,50,60,70,80,90]
num.forEach((num)=>
{
  if(num>20)
  {
    arr1.push(num);
  }
})
console.log(arr1)

