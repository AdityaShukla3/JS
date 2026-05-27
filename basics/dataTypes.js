"use strict"; // treat all JS code as newer version

//alert("hello")   --> Will not work directly in node but will work in browser
//                  --> Used for popup
//console.log(3+3);       //6

let age=20
let name="Adi"
let isLoggedIn=true;

//                      Primitive
//number
//bigInt (for larger numbers)
// string
// boolean
// null
// undefined
// symbol           ---> unique

//                       Non-Primitive
//object

console.log(typeof "Adi");
console.log(typeof age);

console.log(typeof null);        //  --> Object
console.log(typeof undefined);   // ---> undefined


//  Primitive                  ==> Stored in Stack  , 
/* 
    String,Number,Boolean,null,undefined,Symbol,BigInt
*/
/*
    (changes are made in copy)
    e.g. let a=1;
         let b=a
         a=2
         print(b)
         print(a)
*/
//  Reference Type(Non-Primitive)       ==> Stored in Heap  , (changes are made in original)
/*
    Arrays,Objects,Functions
*/
/*
        e.g. let obj={
                    a:1,
                    b:2
        }
              let obj2=obj
              obj.a=5
              changes will be made in a that will be reflected in both objects      
 */
let arr=[1,2,3,"hello"]
console.log(arr);           //no error
console.log(typeof arr);    //object

let obj={
    a:1,
    b:"abc"
}
console.log(obj); // same print
console.log(typeof obj); // object

// function type of will give o/p function 

//                  JavaScript is a dynamically typed language  