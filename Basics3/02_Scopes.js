let a =10
const b=20
var c =30
console.log(a,b,c);

//  {}=>Scope //
if(true){
let d=40
const e=50
// Inside "Block Scope"(outside { } Is Called "Global Scope")
}

//Lets take a case Asumme SOmeone used a "Defined Letter" twice
let xyz=123
let abc=456

if (true){
let xyz=789
console.log("INNER:",xyz);//OUTPUT:789
//Inside "Block scope" the value of XYZ is diffrent comapre to "Global Scope"
}
console.log(xyz);//OUPUT:123

//NESTED SCOPE
 
function one(){
const name="vidhan"


function two(){
    var website="Youtube"
    console.log(name);// Innner function ke liye Outer function Acces Krna "OK" hai!
    
}

// console.log(website);
//IT WOULD GIVE ERROR COZ =>
// Outer function ke liye Inner function Acces Krna "WRONG!" hai!


two()

}

one()// Code Runs Line BY Line so if You remove One() the function would not get triggered Giving Nothing 



if (true) {
    const username="vidhan"

    if (username==="vidhan") {

        const website="youtube"
        console.log(username+website);
        
    }
    // console.log(website);
    //Same thing you cant acces it as it is out of SCOPE
}
// console.log(username);
// Same thing out of SCOPE



//***********************************INTERSTING CONCEPT******************* */


console.log(addone(68))

function addone(num){
return num+1

}
console.log(addone(68))
// It runs perfectly here and above the functions too

//BUT

// console.log(addtwo(5))

//It dont here IT CANT ACCEESS IT why? NEXT SLIDE

const addtwo=function(num){
    return num+2
}


