// functions
function sayMyName(){
    console.log("A");
    console.log("b");
    console.log("d");
    console.log("u");
    console.log("l");
}

//sayMyName();
// Output
// A
// b
// d
// u
// l

function addTwoNumbers (number1, number2){
    console.log(number1 + number2)
   // console.log(typeof number1)
    //console.log(typeof number2)
}

function addTwoNumbers (number1, number2){
    // let result = number1+number2
    // return result
    //return number1+number2
}

// addTwoNumbers(3 , 4); // Output: 7 as 3 is the number 4 is the number
// addTwoNumbers(3 , "4");// Output: 34 as 3 is the number 4 is the string
// addTwoNumbers(3 , "a");// Output: 34 as 3 is the number a is the string
// addTwoNumbers(3 , null);// Output: 34 as 3 is the number null is the string
// addTwoNumbers(3 , undefined);// Output: 34 as 3 is the number null is the string

// const result = addTwoNumbers(3,5)
// console.log("Result:", result);

function loginUserMessage(username) {
    // if (username === undefined){
    //     console.log("please enter a username");
    //     return
    // }
    if (!username){
        console.log("please enter a username");
        return
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("Gaffoor"))

// console.log(loginUserMessage("Jhonny"));

function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(200,300,400,500))

// object declaration
const user={
    username: "Gaffoor",
    price: 200
}

function handleObject (anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)

//object pass in fuction
handleObject({
    username: "Johnny",
    price: 500
})


const myNewArray=[200,400,100,600]

function returnSecondValue(getArray) {
    return getArray
}

//console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,400,100,600]));