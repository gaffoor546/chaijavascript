const userEmail = []

if (userEmail){
console.log("Got user email");
} else {
    console.log("Don't have user Email");
}
// Falsy values
// false, 0, -0, BigInt on, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function() {}

// if (userEmail.length === 0){
//     console.log("Aray os empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}

// nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// console.log(val1);// 5
// val1 = null ?? 10
// console.log(val1);// 10
// val1 = undefined ?? 15
// console.log(val1); // 15
// val1 = null ?? 15 ?? 20
// console.log(val1);// 15

// val1 = undefined ?? 33
// console.log(val1); // 33

/*********Terniary operator*************** */

// consition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");



