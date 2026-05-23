console.log(2**2); //2^2

console.log("1"+2); //12
console.log(1+"2");  //12
console.log(typeof(1+"2")); //string
console.log(typeof("1"+2));  //string

console.log(1+"2"+2);   //122
console.log("1"+2+2);   //122
console.log(1+2+"2");   //32

console.log("2">1);     //true
console.log("02">1);    //true

console.log(null>0);    //false
console.log(null==0);   //false
console.log(null >= 0); //true

//strict check ===

console.log("2"===2); //false
//type check bhi krta hai data type change hote hi false
console.log("2"==2);    //true

