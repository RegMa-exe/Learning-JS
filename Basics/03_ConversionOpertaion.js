 let score = "29"// score here refer to the Data that has been came from Website etc..
 console.log(typeof score);// It shows What type is of score it could be =String,Number,Object


 let valueofnumber = Number(score)//Here We fetch the details We would fetch the Number from Score Variable(only if number si thier)
 console.log(valueofnumber);//Check if it fetching the number only

// "33"=> string lekin after Fecthing it would show Output as=>33
// "33X"=> String but Inside is not a Number so It would show NaN(Not a Number)
// null=> Object
// true=>1 False=>0

let IsLoggedin="vidhna"


let booleanisloggedin = Boolean(IsLoggedin)
console.log(booleanisloggedin);

//1=>True
//0-=>false
//"" =>flase
//"Not empty"=> True

let Result=97//number
//lets convert it to string
let StringResult=String(Result)
console.log(StringResult);//To convert Number into String
console.log(typeof StringResult);// IS it realy converted into string?
