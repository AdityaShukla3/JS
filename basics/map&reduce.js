const arr=[1,2,3,4,5]
// let val=arr.forEach((ele)=>{
//     console.log(ele);           //items of array printed
// })
// console.log(val);       //undefined

// val=arr.forEach((ele)=>{
//     return ele
// })
// console.log(val);       //undefined

// let new_arr=arr.filter((ele) => ele>2)                       //filter returns an array of numbers on whom whatever operation is being performed
// console.log(new_arr);                   //[ 3, 4, 5 ]

// const newarr=[]
// arr.forEach((ele)=>{
//     if(ele>2){
//         newarr.push(ele)
//     }
// })
// console.log(newarr);            //[ 3, 4, 5 ]

// const newArr=arr.map((ele)=> ele+10)        //returns array
// console.log(newArr);                //[ 11, 12, 13, 14, 15 ]

const new_Arr=arr.
                map((ele)=>ele*10)
                .map((ele)=>ele+1)
console.log(new_Arr);                           //[ 11, 21, 31, 41, 51 ]

const new_Arr1=arr.
                map((ele)=>ele*10)
                .map((ele)=>ele+1)
                .filter((ele)=> ele>=30)
console.log(new_Arr1);                          //[ 31, 41, 51 ]

//reduce

let arr1=[1,2,3,4,5]
let total=arr1.reduce(function (accumulator,curr_val){
    console.log(`Accumulator : ${accumulator} and Cuurrent Sum is :${curr_val}`);
    
    return accumulator+curr_val;
},0)                                                        //this 0 value is initial value of accumulator
console.log(total);                                         //15

let t=arr1.reduce((acc,sum)=> acc+sum,0)            //initialised vlaue is 0 to the acc
console.log(t);                                     //15

const shop=[
    {
        name:"mobile",
        price:20000
    },
    {
        name:"laptop",
        price:60000
    },
    {
        name:"tablet",
        price:10000
    }
]
let pricetopay=shop.reduce((sum,obj)=> sum+obj.price,0)
console.log(pricetopay);                                    //90000
