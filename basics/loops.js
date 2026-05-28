// for loop
// for(let i=0;i<5;i++){
//     console.log(i+1);
// }

// //while loop
// let idx=0;
// while(idx<5){
//     console.log(idx+1);
//     idx++;
// }

// //do while
// do{
//     console.log(idx);
//     idx--;
// }
// while(idx>0)

//higher order array loops

// for of loop inn array give the value of array elements 
// let arr=[1,2,3,4];
// for (const i of arr) {
//     console.log(i);                                      
// }

// let str="string"
// for(const s of str){
//     console.log(`Each char is ${s}`);
// }

// //Maps
const map=new Map()
map.set("IN","India")
map.set("AUS","Australia")
map.set("ENG","England")
// console.log(map);                        //Map(3) { 'IN' => 'India', 'AUS' => 'Australia', 'ENG' => 'England' }
// map.set("IN","India")
// console.log(map);                       //Map(3) { 'IN' => 'India', 'AUS' => 'Australia', 'ENG' => 'England' }
//                                         // remains same as map contains unique values

// //for of loop on maps gives an array of [key ,value] of each key-value pair
// for(const [key,value] of map){
//     console.log(key, ":-", "value");
// }

// //for of loop in object(can not be iterated through for of)
const obj={
    a:1,
    b:2
}
// for(const [key,value] of obj){
//     console.log(key,":-",value);            //TypeError: obj is not iterable
// }

//then how to iterate on objects
//using for in loop
for(const key in obj){
    console.log(`${key} :- ${obj[key]}`);                       
}

//for in loop in arrays give the index of the array elements not the values
let arr1=[1,2,3,4,5,6]
for(const i in arr1){
    console.log(i);
}

//for in loop in map does not work as map is not iterable
for(const key in map){
    console.log(key);
    
}

//for each loop in array
const arr2=[1,2,3,4,5]
// arr2.forEach(function (e){
//     console.log(e);                     //1 2 3 4 5(in vertical order)  
// })

//arrow fn passed in foor each loop
// arr2.forEach((i)=>{
//     console.log(i);                         // same as above
// })

function print(a){
    console.log(a);
}
arr2.forEach(print)                     //same as above 
                                        //only refernce of fn has to be passed , we do not need to execute it

//for each loop has many parameters except value of elements 

arr2.forEach((val,idx,arr)=>{
    console.log(val,idx,arr);       //1 0 [ 1, 2, 3, 4, 5 ]
                                    //2 1 [ 1, 2, 3, 4, 5 ]
                                    //3 2 [ 1, 2, 3, 4, 5 ]
                                    //4 3 [ 1, 2, 3, 4, 5 ]
                                    //5 4 [ 1, 2, 3, 4, 5 ]
})

//for-each loop in array of objects

const arr3=[
    {
        name:"Adi",
        age:21
    },
    {
        name:"Raj",
        age:21
    },
    {
        name:"Abhi",
        age:21
    }
];
arr3.forEach((obj)=>{
    console.log(obj.name);
    
})