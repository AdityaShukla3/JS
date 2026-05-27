//this refers to current object
// const user={
//     username:"Adi",
//     age:21,
//     msg:function(){
//         console.log(`Welcome ${this.username}!!`);
//         console.log(this);
//     }
// }
// // user.msg        //no o/p
// // user.msg()      // Welcome Adi!!
// // user.username="Aditya"
// // user.msg();     //Welcome Aditya!!

// console.log(this);      //{}    ==> empty object mans no context 
// // Earlier there was one engine int the engine but when this engine got extracted then it was named node,deno,... 
// //So when the engine runs on browser it shows windows (Browser has global object as Windows)
// //When it runs ons vs code then it shows {}

// function fun1(){
//     console.log(this);
    
// }
// fun1();

// function fun2() {
//     let name="Adi"
//     console.log(this.name);    
// }
// fun2();                     //undefined

//Arrow Function

const fun= ()=>{
    let name="Aditya"
    console.log(this.name);     //undefined
    console.log(this);          //{}
}
fun();

//Explicit return
const addTwo= (a,b) => {
    return a+b;
}
console.log(addTwo(1,2));       //3

//Implicit return
const addThree=(a,b) => (a+b);
console.log(addThree(1,2));     //3

//Return object in arrow fn
let obj=(a,b)=>{name:"Aditya"}
console.log(obj);           //[Function: obj]
console.log(obj());         //undefined
console.log(obj(1,2));      //undefined

obj=(a,b)=>({name:"Aditya"})
console.log(obj(1,2));      //{ name: 'Aditya' }
