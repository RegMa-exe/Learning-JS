//Date
let TodayDate=new Date()
console.log(TodayDate);//Very Complicated Date We get
console.log(TodayDate.toString());//OUTPUT:Sat Jul 27 2024 16:25:46 (Clear date)
//Now there are many types of string we can create
console.log(TodayDate.toDateString());//Output :Sat Jul 27 2024
console.log(TodayDate.toLocaleString());//OUTPUT:  7/27/2024, 4:31:11 PM
console.log(TodayDate.toLocaleDateString());//Only date in MM/DD/YY
/*INTERVIEW QUES*/
console.log(typeof TodayDate);//Object(Ans)


let Favdate=new Date(2023,0,23)
let Favdateandtime=new Date(2023,0,23)
console.log(Favdate.toDateString());//Mon Jan 23 2023
/* Month Start from 0 in JS 0-jan 1-Feb*/
/* if 12 then it jumps to next year*/
console.log(Favdateandtime.toString());//Mon Jan 23 2023 05:03:04(we can set time too)

////////////////////////////////////////////////////////////////////////////////////////////


let nowtime = Date.now()//not an object a number
console.log(nowtime);//In milisec added  from 1 jan 1970
console.log(typeof nowtime);//Number
console.log(Favdateandtime.getTime());//1674450184000(miliseconds)
// To make it in sec//
console.log(Favdateandtime.getTime()/1000);

//How to fetch particular details
let newdate = new Date()
console.log(newdate.getHours());//put .getxyz()  () becuse it is a object to execute it


let Bdaydate = new Date(2005,11,22)
console.log(Bdaydate.toLocaleString());


//IN order to extract extra Information from given date
let weekday=Bdaydate.toLocaleString('default',{

    weekday: "long",//to print day
    month: "long"//to print month
})
console.log(weekday);


