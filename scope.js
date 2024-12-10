if(true)
{
    let a=100;
    const b=200
    var c=300
}

// console.log(a);this has a block level and global scope
// console.log(b);this has a block level and global scope
console.log(c);//it has a local scope



//Nestead scope function 
function one()
{
    const uname="Abhi"
    function two()
    {
        const name="AP"
        console.log(uname);
    }
    // console.log(name)//scope of name is block level so cant acess here
    two()

}
one()

console.log(show(5))
function show(num)
{
    return num
}
console.log(show(10))

// myfun()--->this type of function decalration not allowed to before the intializaltion of function
const myfun=function(num)
{
    return num;
}
console.log(myfun(30))


