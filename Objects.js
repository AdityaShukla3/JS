//singleton  ==> when we create object as literal then it is not singleton but if we create it as constructor(Object.create()) then it is

//object literals

const smb=Symbol("key1");


const user={
    name:"Aditya",
    "full name":"Aditya Shukla",
    [smb]:"Key is of Symbol type",
    age:21,
    location:"Kanpur",
    email:"adi@gmail.com",
    isLoggedIn:false
}

console.log(user.name);
console.log(user["name"]);
console.log(user["full name"]);
console.log(user[smb]);                     // ==> ye dot notation se nhi hota hai bracket se hi hota hai

//to change any value in the value of any key
user.email="adi@google.com"

//To freeze any object so that no changes can be made 
//Object.freeze(user);

//If after freezing any object, I am changing the value of any key then it will not show any error instead it will not update 
user.email="adi@gmail.com"
console.log(user);

//to add any key in object
user.greet=function(){
    console.log("Hello World");    
} 
console.log(user.greet);                    //[Function (anonymous)]   ==> reference of function
console.log(user.greet());                  //Hello World

user.hello=function(){
    console.log(`Hello ${this["full name"]}!! How are you!?`);          //Hello Aditya Shukla!! How are you!?
}
console.log(user.hello());




// let obj=new Object();    //Singleton object
// let tUser={}                     //Non-SIngleton object
// console.log(tinderUser);            //{}
// console.log(tUser);                 //{}

let obj={};
obj.id="123ab"
obj.name="Adi"
obj.isLoggedIn=false;

console.log(obj);           //{ id: '123ab', name: 'Adi', isLoggedIn: false }

const reg={
    email:"adi@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Aditya",
            lastname:"Shukla"

        }
    }
}
console.log(reg.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};

let obj3={obj1,obj2};
console.log(obj3);              //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

obj3=Object.assign(obj1,obj2);
console.log(obj3);              //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

obj3=Object.assign({},obj1,obj2);    // {} is the target object
console.log(obj3);

const spread={...obj1,...obj2}
console.log(spread);            //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


console.log(obj);                   //{ id: '123ab', name: 'Adi', isLoggedIn: false }
console.log(Object.keys(obj));      //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(obj));    //[ '123ab', 'Adi', false ]
console.log(Object.entries(obj));   //[ [ 'id', '123ab' ], [ 'name', 'Adi' ], [ 'isLoggedIn', false ] ]

console.log(obj.hasOwnProperty("isLoggedIn"));     //true       ==> to check whether object has given key or not 
