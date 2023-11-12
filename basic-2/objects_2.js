//const tinderUser = new Object()
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isloggedIn=false

//console.log(tinderUser);

const regualarUser={
    email:"some@gmail.com",
    fullName:{
        userFullName:{
            firtName:"Abdul",
            LastName:"Gaffoor"
        }
    }
}

//console.log(regualarUser.fullName.userFullName.firtName); // Abdul

//console.log(regualarUser.fullName.userFullName.LastName); // Gaffoor

const objt1 = {1: "a", 2: "b"}
const objt2 = {3: "a", 4: "b"}
const objt4 = {5: "a", 6: "b"}

//const objt3 = {objt1, objt2}
//console.log(objt3); // { objt1: { '1': 'a', '2': 'b' }, objt2: { '3': 'a', '4': 'b' } }

//const objt3 = Object.assign({}, objt1,objt2)
//console.log(objt3); //output { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//const objt3 = Object.assign({},objt1,objt2,objt4)
//console.log(objt3); 

//const objt3 = {...objt1,...objt2,...objt4}
//console.log(objt3); 

//most used  when data come from the data base 
const user = [{
    id:1,
    email: "g@gmail.com"
},
{
},
{
}
]

user[1].email

// console.log(tinderUser)

// console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isloggedIn' ]
// console.log(Object.values(tinderUser)); //[ '123abc', 'Sammy', false ]

// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isloggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isloggedIn'));


//*********Object API******************/ 

const course = {
    courseName: "JS in English",
    price: "999",
    courseInstructor: "Gaffoor"
}

//course.courseInstructor

//const {courseInstructor} = course
//console.log(courseInstructor); // Gaffoor
const {courseInstructor: instructor} = course
console.log(instructor);// Gaffoor

// const navbar = ({company}) => {
// }
// navbar(company="MGMstore")

//**********API's ************** */

// {
//     "name": "Gaffoor",
//     "courseName": "JS in English",
//     "price": "free"
    
// }


[
    {},
    {},
    {}
]


////***https://randomuser.me/******https://randomuser.me/api/****************/

