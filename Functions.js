function hello(){
    console.log("Hello World");
    
}
hello();

function sum(a,b){
    console.log(a+b);
}
sum(1,"3");
sum(1,"a")

const ans=sum(1,4)
console.log("Sum is : ",ans);

function fun(name){
    if(name === undefined){
        return `Please enter username`
    }
    return `Hello ${name}`;
}
console.log(fun("Aditya"));     //Hello Aditya
console.log(fun());             //Hello undefined

function valid(name = "Adi"){
    if(name === undefined){
        return `Please enter username`
    }
    return `Hello ${name}`;
}
console.log(valid());                     //Hello Adi
console.log(valid("Aditya"));             //Hello Aditya


function calculatePrice(...cost){               // Rest operator --> all values will be passed as an Array
    return cost;
}
console.log(calculatePrice(20,52,28));          //[ 20, 52, 28 ]     

function calc(val1,val2,...arr){
    return arr;

}
console.log(calc(100,200,300,400));             //[ 300, 400 ]

// how to pass object in fn
const user={
    name:"Aditya",
    age:21
}
function handleObject(obj){
    console.log(`Username is ${obj.name} and age is ${obj.age}`);           
}
//handleObject(user)                        //Username is Aditya and age is 21
handleObject({
    name:"Adi",
    age:21                          //Username is Adi and age is 21
})

//when key is not present in the object then it shows undefined in the output
handleObject({
    age:21                         //Username is undefined and age is 21
})

