let score = "True"

//const {scores} = req.body;

console.log(typeof score)
console.log(typeof(score))
console.log(score);

let valueInNumber = Number(score) // number convert

console.log(typeof valueInNumber);

console.log(valueInNumber);

// conversion operation
// "33" ==> 33
// "33abc" ==> NAN
// true => 1; false => 0

let isloggedIn = 1

let booleanIsloggedIn = Boolean(isloggedIn) // boolean convert

console.log(typeof booleanIsloggedIn)
console.log(typeof isloggedIn)

console.log(isloggedIn)
console.log(booleanIsloggedIn)

// 1 => true; 0 => false
// "" => false
// "Name" => true


let someNumber = 33

let stringNumber = String(someNumber) //string convert
console.log(typeof stringNumber)
console.log(stringNumber)