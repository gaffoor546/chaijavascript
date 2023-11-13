const user = {
    userName: "Gaffoor",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.userName}, Welcome to our website and you bought for ${this.price} price`);

    }
}

// user.welcomeMessage()
// user.userName = "Sam"
// user.price = 1000
// user.welcomeMessage()

// console.log(this.user)
// user.welcomeMessage()

// const chai = function(){
//     let userName= "Gaffoor"
//     console.log(this.userName);
//}

// const chai = () => {
//     let userName= "Gaffoor"
//     console.log(this);
// }
// chai() // {}

// const addTwoNum = (num1,num2) => { // Implicity return function
//     return num1 + num2
// }

//******Intersting  */
//const addTwoNum = (num1,num2) =>  num1 + num2 

// explicity return function
//const addTwoNum = (num1,num2) => ( num1 + num2 ) 

//****Object return  */
//const addTwoNum = (num1,num2) => { userName: "Gaffoor"} // undefined
const addTwoNum = (num1,num2) => ( { userName: "Gaffoor"} ) //{ userName: "Gaffoor"}


console.log(addTwoNum(3, 8))