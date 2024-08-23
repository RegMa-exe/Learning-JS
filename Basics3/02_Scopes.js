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





