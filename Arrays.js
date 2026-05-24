const arr=[1,2,3,4,5];
const arr2=new Array(1,2,3,4)
console.log(arr);
console.log(typeof arr);    //object
console.log(arr[0]);

arr.push(6);
console.log(arr);           //[1,2,3,4,5,6]

arr.pop();
console.log(arr);

arr.unshift(0);            //added to starting of array
console.log(arr);           //[ 0, 1, 2, 3, 4, 5 ]

arr.shift();                // remove first element from starting of array
console.log(arr);           //[ 1, 2, 3, 4, 5 ]

console.log(arr.includes(5));
console.log(arr.includes(6));

console.log(arr.indexOf(2));
console.log(arr.indexOf(0));

const newArr=arr.join();
console.log(arr);           //[ 1, 2, 3, 4, 5 ]
console.log(newArr);        //1,2,3,4,5
console.log(typeof newArr);     //string

//slice,splice

console.log('A ',arr);     //A  [ 1, 2, 3, 4, 5 ]

const myn1=arr.slice(1,3)         //i)portion of array remains as it is         ii)excludes last one
console.log(myn1);          //[ 2, 3 ]
console.log("B ",arr);      //B  [ 1, 2, 3, 4, 5 ]

const myn2=arr.splice(1,3);         //i)spliced portion of the array is removed from original array     ii)includes last one
console.log(myn2);          //[ 2, 3, 4 ]
console.log('C ',arr);      //C  [ 1, 5 ]


const marvel=['Iron Man','Thor','Captain America'];
const country=['America','Australia','England'];

// marvel.push(country);
// console.log(marvel);                   //['Iron Man','Thor','Captain America',[ 'America', 'Australia', 'England' ]]

const op=marvel.concat(country);          //return new array of the concatenated version of the two arrays 
console.log(op);                           //['Iron Man','Thor','Captain America','America','Australia','England']

const spread=[... marvel,...country];      // same as concat
console.log(spread);                    //['Iron Man','Thor','Captain America','America','Australia','England']


const a=[1,2,3,[4,5,6],[7,8,[9,0]]];
console.log(a);                             //[ 1, 2, 3, [ 4, 5, 6 ], [ 7, 8, [ 9, 0 ] ] ]
console.log(a.flat(Infinity));              //[1, 2, 3, 4, 5,6, 7, 8, 9, 0]


console.log(Array.isArray("Aditya"))        //false
console.log(Array.from("Aditya"));          //[ 'A', 'd', 'i', 't', 'y', 'a' ]

console.log(Array.from({name:"Aditya"}));    //[] empty array because it can not decide whether to mke array from keys or values so we need to specify

let c1=1
let c2=2
let c3=3
console.log(Array.of(c1,c2,c3));
