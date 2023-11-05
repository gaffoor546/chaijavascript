//Date

// let myDate = new Date()
// console.log(myDate);
// console.log(typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2023, 12, 23, 10, 30)

// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-04-2023")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log((Math.floor(Date.now()/1000)));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getTime());
// console.log(newDate.getMonth()+1);
//console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
    month: "short",
    timeZone: "current"
});



