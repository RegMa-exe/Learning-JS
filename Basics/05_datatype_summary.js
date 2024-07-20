// Primitive Data Types//

//Total 7 Catogeries :String,Number,Null,boolean,undefined,Symbol,BigInt(for scintifc value or big no)

let Name="Vidhan"
console.log(Name);

let Score=18
console.log(Score);

let TempOutisde=null
console.log(TempOutisde);

let Isloggedin=true
console.log(Isloggedin);


/*SYMBOL*/  

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

const id=Symbol('@')
console.log(id);


//Refrence Type (Non Primitive)

//Arrays,Objects,,Functions

//Array=> Isntead of giving each variable of each diffrent element we use array to give it it one and then extract it accc to our need 

const Heros=[ "Hulk" , "Ironman", "Vision"]
let Hero2=Heros[2]//Array start from 0
console.log(Hero2);

let user1={
id: "abc123",
Pass:"123" 

}

console.log(user1.Pass   
)
//*****************************MEMORY***************************** *//

//Stack Memory(For primitive Type),Heap Memory(For Non Primitive type)

let emailaddres="xyz@gmail.com"
  
 let Username=emailaddres
 Username="abc546"
 console.log(Username);
 console.log(emailaddres);
 //Stack make copy of data when you use it by other means henace changing it wont change the atcual source but only the copy data that we have maded


 //Heap
 let Details={

Rollno: 300

 }

 let Rank=500

Details.Rollno=Rank

console.log(Rank);
console.log(Details.Rollno);
// In Heap Memeory We are accesing the same data everytime we use it so changing one form of it will imapct on the main data also unlike stack memomry

