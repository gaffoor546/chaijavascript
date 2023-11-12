// singleton


// Object literals

//Symbol data type
const mySYM= Symbol("Key1");


const jsUser = {
    name: "MyHero",
    "Full name": "Super Man",
    [mySYM]: "myKey1",
    age: 18,
    location: "Hyderabad",
    email: "myhero@google.com",
    isloggedIn: false,
    lastloginDays: ["Monday","Saturday"]
}

//console.log(jsUser.email); //output: myhero@google.com
//console.log(jsUser["email"]); //output: myhero@google.com

//console.log(jsUser["Full name"]);  //output: Super Man

//console.log((jsUser[mySYM]));
//jsUser.email="myherosSuperman.chatgpt.com"
//Object.freeze(jsUser)

//jsUser.email="myherosSuperman.msn.com"
//console.log(jsUser);

// myKey1
// {
//   name: 'MyHero',
//   'Full name': 'Super Man',
//   age: 18,
//   location: 'Hyderabad',
//   email: 'myherosSuperman.chatgpt.com',
//   isloggedIn: false,
//   lastloginDays: [ 'Monday', 'Saturday' ],
//   [Symbol(Key1)]: 'myKey1'
// }

jsUser.greeting = function(){
    console.log("Hello JS User function")
}


jsUser.greetingTwo = function(){
    console.log(`Hello JS User function, ${this.name}`)
}
console.log(jsUser.greeting()); // output Hello JS User function
console.log(jsUser.greetingTwo()); // output Hello JS User function, MyHero