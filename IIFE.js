//Immediately Invoked FUnction Expressions

//Global scope ke pollution se problem hoti hai kai baar toh us global scope ke variables ko hatane ke liye iife ka use kiya
//Global scope pollution create problems so to remove global scope variables we use iffe


//named IIFE
(function (){
    console.log("DB Connected");
})();

//Unnamed IIFE
//(intermediate value)(...) is not a function         ==> this was beacause previous fn was never ended(put semi-colon)
(()=>{
    console.log("DB Connected");
})();

((name)=>{
    console.log(`Hello ${name}!!`);                 //Here "Aditya" is passed as an argument first then taken as parameter
    
})("Aditya");