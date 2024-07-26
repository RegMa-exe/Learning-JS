/**********NUMBERS********/

const score=400
console.log(score);

const UserId= new Number(100) //The "new" operator lets developers create an instance of a user-defined object type
console.log(UserId);

console.log(typeof UserId);//Object

console.log(UserId.toString().length);


const UserId2=new Number(100.743453)
console.log(UserId2.toFixed(2));//It just wind up Ki How much Decimal it will show in output 

console.log(UserId2.toPrecision(3));//Output 101 (it Round off to the digit you tell)

const price =1000000
console.log(price.toLocaleString(`en-IN`));//to show data Regionally OUTPUT:10,00,000 instead of 1000000
/* `en-IN` to convert it to Indian standard*/


/**************MATHS*******************/
//Ref="C:\Users\Vidhan\Pictures\Screenshots\Screenshot 2024-07-24 132015.png"


console.log(Math.log2(16))
console.log(Math.round(4.8));//round-off
console.log(Math.sin(Math.PI*0.5));//Trignometry(Radian=>Input)
console.log(Math.min(2,3,4,5,68,));//Tells Minimum Value


console.log(Math.random());//Always give value Betwen 0 and 1
/* Now to Get value above it*/
console.log(Math.ceil((Math.random())*10))//It will give value between 0 and 10

//Now to set Range of the Number
const Min=1
const Max=6
 
console.log(Math.floor(Math.random()*(Max-Min +1))+1);










