// primitive datatypes

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3
const isloggedIn = false
const outSideTemp = null;
let userEmail= "master";
let username;
const id=Symbol('123')
const aotherID = Symbol('123')
console.table([score,scorevalue,isloggedIn,outSideTemp,userEmail,username,
typeof id,typeof aotherID])
console.log(id === aotherID)

const bigNumber= 2345678765434567n

// Reference (Non Primitive)

// Array, Objects, Functions

const hero = ["shatiman", "Herosman", "doga"];

let myObj ={
    name: "Gaffoor",
    age: 22,


}

const myFunction = function(){

    console.log("hello www");
}

console.log(typeof myFunction)