const name="Aditya"
const age=21

//console.log(name+c+" val");

//              String InterPolation
console.log(`Hello my name is ${name} and my age is ${age}`);

const nam=new String("Aditya")
console.log(nam);              // [String: 'Aditya']
/*  In console it shows String {Aditya}
                        0:"A"
                        1:"d"
                        ...
                        length:6

                        these are key value pairs we get length of string plus some prototype methods
*/
console.log(nam[0]);       //  A
console.log(nam.length);   //6
console.log(nam.toUpperCase());    //ADITYA
console.log(nam.charAt(3));         // t
console.log(nam.indexOf('t'));      //3 
console.log(nam.substring(0,4));    //Adit                  if we put negative value here then it will ignore them start from initial
 
let str=nam.slice(0,4)                  //                  we can use negative values here as negatve means from last
console.log(str);                       //Adit
str=nam.slice(-1,4);
console.log(str);                       //Adit

let s1="        Adi      "
console.log(s1);          // same as above
console.log(s1.trim());   //Adi

let url="https://netflix.com"
console.log(url.replace(".com","@gmail"));      //https://netflix@gmail
console.log(url.includes("net"));               //true

let s2="Adi-tya-Shu-kla"
console.log(s2.split('-'));         //[ 'Adi', 'tya', 'Shu', 'kla' ]
