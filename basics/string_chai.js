const name = "Gaffoor"
const repoCount = 50

console.log(name +" "+ repoCount  +" "+  "Value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Gaffoor-SAG')

console.log(gameName[4]);
console.log(gameName.length);
console.log(gameName.toLocaleLowerCase());
console.log(gameName.toLocaleUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.anchor());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
console.log(gameName.at());
console.log(gameName.__proto__);


const newString = gameName.substring(0,4)

console.log(newString);

const anotherString = gameName.slice(-8, 4)

console.log(anotherString);

const newStringOne = "  gaffoor  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://github.com/gaffoor546/chai%20javascript"

console.log(url.replace('%20', '-'));
console.log(url.includes('gaffoor'));
console.log(gameName.split('-'))

/*
anchor
: 
ƒ anchor()
at
: 
ƒ at()
big
: 
ƒ big()
blink
: 
ƒ blink()
bold
: 
ƒ bold()
charAt
: 
ƒ charAt()
charCodeAt
: 
ƒ charCodeAt()
codePointAt
: 
ƒ codePointAt()
concat
: 
ƒ concat()
constructor
: 
ƒ String()
endsWith
: 
ƒ endsWith()
fixed
: 
ƒ fixed()
fontcolor
: 
ƒ fontcolor()
fontsize
: 
ƒ fontsize()
includes
: 
ƒ includes()
indexOf
: 
ƒ indexOf()
isWellFormed
: 
ƒ isWellFormed()
italics
: 
ƒ italics()
lastIndexOf
: 
ƒ lastIndexOf()
length
: 
0
link
: 
ƒ link()
localeCompare
: 
ƒ localeCompare()
match
: 
ƒ match()
matchAll
: 
ƒ matchAll()
normalize
: 
ƒ normalize()
padEnd
: 
ƒ padEnd()
padStart
: 
ƒ padStart()
repeat
: 
ƒ repeat()
replace
: 
ƒ replace()
replaceAll
: 
ƒ replaceAll()
search
: 
ƒ search()
slice
: 
ƒ slice()
small
: 
ƒ small()
split
: 
ƒ split()
startsWith
: 
ƒ startsWith()
strike
: 
ƒ strike()
sub
: 
ƒ sub()
substr
: 
ƒ substr()
substring
: 
ƒ substring()
sup
: 
ƒ sup()
toLocaleLowerCase
: 
ƒ toLocaleLowerCase()
toLocaleUpperCase
: 
ƒ toLocaleUpperCase()
toLowerCase
: 
ƒ toLowerCase()
toString
: 
ƒ toString()
toUpperCase
: 
ƒ toUpperCase()
toWellFormed
: 
ƒ toWellFormed()
trim
: 
ƒ trim()
trimEnd
: 
ƒ trimEnd()
trimLeft
: 
ƒ trimStart()
trimRight
: 
ƒ trimEnd()
trimStart
: 
ƒ trimStart()
valueOf
: 
ƒ valueOf()
Symbol(Symbol.iterator)
:*/
