const s=10;
console.log(s);     //   10


const c=new Number(10);
console.log(c);        // [Number: 10] because new object has been defined
console.log(typeof c);  // object

console.log(c.toString().length);   // 2
console.log(typeof c);             // object

let a=100
console.log(a.toFixed(2)); // 100.00

let o=23.8966
console.log(o.toPrecision(3)); // 23.9
o=123.8966
console.log(o.toPrecision(3));  // 124

let i=10000000;
console.log(i.toLocaleString());             // 10,000,000
console.log(i.toLocaleString('en-IN'));     //  1,00,00,000


/*
                        MATHS
*/

console.log(Math);    // Object [Math] {}

console.log(Math.abs(3-4));  // 1
console.log(Math.round(4.3));  //4
console.log(Math.ceil(4.2));  //5
console.log(Math.floor(4.2));  //4
console.log(Math.min(1,2,3,4));  //1
console.log(Math.max(1,2,3,4));  //4

console.log(Math.random());     // Between [0,1]
console.log(Math.random()*10);   // Between [0,10]

console.log(Math.floor(Math.random()*(100-0 +1)));
