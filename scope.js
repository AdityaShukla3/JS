// var c=100

// if(true){
//     let a=10
//     const b=20
//     var c=30
// }

// // console.log(a);          ReferenceError: a is not defined
// // console.log(b);          //ReferenceError: b is not defined
// console.log(c);             //30

let a=100
if(true){
    let a=10
    console.log(a);         //10
    
}
console.log(a);         //100

//Closure

function one(){
    const name="Adi"
    
    function two(){
        const age=21
        console.log(name);
        
    }
    //console.log(age);           //ReferenceError: age is not defined
    
    two();
}
one();



//expression 
/*const addTwo=function(n){
    return n+2;
} */

function sum(a,b){
    return a+b;
}
console.log(sum(3,4));              //7 (No Error)


console.log(addOne(2));             //3 (No Error)
function addOne(a){
    return a+1
}


const addTwo=function(n){
    return n+2;
}
console.log(addTwo(4));                      //6 (No Error)


addThree(4);                                 //ReferenceError: Cannot access 'addThree' before initialization
const addThree=function(n){                    //Can access fn after declaration not before
    return n+3
}
