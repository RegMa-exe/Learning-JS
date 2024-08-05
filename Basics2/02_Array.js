const Marvelheros=["ironman","hulk","Captain"]
const Dchero=["batman" ,"Joker"]

Marvelheros.push(Dchero)
console.log(Marvelheros);//It pushes the dc array in marvel but taking whole array as an object:: OUTPUT::[ 'ironman', 'hulk', 'Captain', [ 'batman', 'Joker' ] ] Taking the 2nd array as one element

//To acces it then (Not recommended) Do this
console.log(Marvelheros);
console.log(Marvelheros[3][1]);//OUPUT:: Joker



//In order to Do this effectively Use This >_O
const Array1=[1,2,3,4,5]
const  Array2=[6,7,8,9,10]
//To combine both arrays
const Array3=Array1.concat(Array2)//It Creates a New array
console.log(Array3);//1,2,3,4,5,6,7,8,9,10

//More Easy way (ikr)
const AllArray=[...Array1,...Array2]
console.log(AllArray);//SPREAD METHOD

//Complicated Array

const ary1=[1,2,3,[4,5,6],7,[8,9,[10,11]]]
const Useable_ary=ary1.flat(Infinity)//Tell Ki At how much depth it should go in.
console.log(Useable_ary);//OUTPUT::[1,2,3,4,5,6,7,8,9,10,11]



//Interview Based 
console.log(Array.isArray("xyz"))//Tells If data is Array or Not;

//To make array out of smothing
console.log(Array.from("Vidhan"));//Any value will convert into Array

console.log(Array.from({name: "Vidhan"}));//It cant deal with object directly so Prints [empty array]

//********************************* */

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
//.of=> returen new array from set of elements
