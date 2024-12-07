const course={
    name:"Abhishek",
    id:22,
    c_name:"free",
    course_instructure:"Abhishek"
}

//this is a object destructuring in js
const {course_instructure}=course
console.log(course_instructure);
const {course_instructure:inst}=course
console.log(inst);

//now we discuss about API 
///API has two fromat xml file and json fromat in object

// {
//     "id":"Abc",
//     "name":"Abhishek"
// }

// array of object API 
[
    {},
    {}, 
]