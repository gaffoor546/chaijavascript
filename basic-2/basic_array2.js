//Array advance

const marval_heros = ["thro", "ironman", "spiderman"]
const dc_heros= ["Superman", "flash", "batman"]
//marval_heros.push(dc_heros)
//console.log(marval_heros); //Output: [ 'thro', 'ironman', 'spiderman', [ 'Superman', 'flash', 'batman' ] ]
//console.log(marval_heros[3][2]) //Output: batman

//marval_heros.concat(dc_heros)
//console.log(marval_heros); //Output: [ 'thro', 'ironman', 'spiderman', [ 'Superman', 'flash', 'batman' ] ]
 
// const all_heros = marval_heros.concat(dc_heros)
// console.log(all_heros); //Output: [ 'thro', 'ironman', 'spiderman', 'Superman', 'flash', 'batman' ]
//const all_newheros = [...marval_heros, ...dc_heros]
//console.log(all_newheros); //Output: [ 'thro', 'ironman', 'spiderman', 'Superman', 'flash', 'batman' ]

//const another_array = [1,2,3,[4,5],6,[7,[8,[9,2]],10],11,12]
//const real_another_array=another_array.flat(Infinity)
//console.log(real_another_array) //[1, 2, 3, 4,  5,  6, 7, 8, 9, 2, 10, 11, 12]

console.log(Array.isArray("MyHero")) //OutPut: false
console.log(Array.from("MyHero"));//OutPut: converted in the array [ 'M', 'y', 'H', 'e', 'r', 'o' ]
console.log(Array.from({name: "myhero"})) //OutPut: [] 

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));




