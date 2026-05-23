let score1=40
let score2="60"

console.log(typeof score1);//number
console.log(typeof(score1));//number

console.log(typeof score2);//string
console.log(typeof(score2));//string

score2="60abc"
let val=Number(score2)

console.log(typeof val);//number
console.log(val);//NaN

score2=null
let valu=Number(score2)
console.log(typeof score2);//object
console.log(typeof valu);//number
console.log(valu);//0

score2=undefined
let value=Number(score2)
console.log(typeof score2);//undefined
console.log(typeof value);//number
console.log(value);//NaN

score2=true
let value1=Number(score2)
console.log(typeof score2);//boolean
console.log(typeof value1);//number
console.log(value1);//1

score2="Aditya"
let v=Number(score2);
console.log(typeof score2);//string
console.log(typeof v);//number
console.log(v);//NaN

//"33" => 33
// "33abc" => NaN
// false => 0
// true => 1 

let isLoggedIn=1
let b=Boolean(isLoggedIn);
console.log(b);     //true

isLoggedIn=""
let b1=Boolean(isLoggedIn);
console.log(b1)     //false

isLoggedIn="Aditya"
let b2=Boolean(isLoggedIn);
console.log(b2)     //true

let s=33
let str=String(s);
console.log(str);       //33
console.log(typeof str);    //string
