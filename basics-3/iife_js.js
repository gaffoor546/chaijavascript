// Immediately Invoked Function Expressions IIFE

(function chai(){ 
    // name IIFE 
    console.log(`DB Connected`);
})(); 

( (name) => {
    // un name IIFE 
    console.log(`DB Connected Two ${name}`);
})("Gaffoor");