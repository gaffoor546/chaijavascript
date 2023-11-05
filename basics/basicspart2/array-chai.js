// array

const myArray = [1,2,3,4,5,6,7,8]
// console.log(myArray);

const myHeros = ["IronMan", "Toar", "SpiderMan"]
// console.log(myHeros);
// console.log(myHeros[2]);
// console.log(myHeros.length);

// myHeros.push("blackpanther")

// console.log(myHeros[3]);

// myHeros.pop()

// console.log(myHeros);

// myHeros.unshift(0,9)
// myHeros.unshift(10)
// console.log(myHeros);
// myHeros.shift()

// console.log(myHeros.includes(9));
//console.log(myHeros.indexOf(9));
// const newHeros = myHeros.join()
// console.log(myHeros);
// console.log(newHeros);

//*********** */ Slice Splice

console.log("A", myArray)

const myn1 = myArray.slice(1,3)

console.log(myn1);

console.log("B", myArray)


const myn2 = myArray.splice(1,3)
console.log("C", myArray)
console.log(myn2);