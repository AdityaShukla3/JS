// Dates starts from January 1,1970

let myDate=new Date();
console.log(myDate);               //2026-05-24T06:24:04.464Z
console.log(typeof myDate);      // object

console.log(myDate.toString());    // Sun May 24 2026 11:54:37 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());  //Sun May 24 2026
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());   //5/24/2026, 11:57:29 AM

let custom=new Date(2026,0,4);
console.log(custom.toString());   //Sun Jan 04 2026 00:00:00 GMT+0530 (India Standard Time)
custom=new Date(2026,1,4,12,5);
console.log(custom.toLocaleString());
custom=new Date("11-25-2026")
console.log(custom.toString());

//TimeStamp
//gives the number of milliseconds from 1 January,1970

let timestamp= Date.now();
console.log(timestamp);

console.log(myDate.getTime());
//If we need convert this milliseconds to seconds then
console.log(Math.round(Date.now()/1000));

let newDate=new Date();
console.log(newDate.getMonth()+1);    //5
console.log(newDate.getDay());        //3

console.log(newDate.toLocaleString('default',{
    weekday:"short",                    // Sun
}))