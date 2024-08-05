//Singleton

//Objects Literals

const Sym= Symbol("key1")

const Jsuser={
name: "Vidhan",
age:18,
[Sym]:"Key1",//We define Symbol Like this
games : ["DarkSouls","GTA5","Valorant"],
Email : "xyz@gmail.com",
"fullname": "Vidhan Shekhawat"//To acced these type we use 2nd method to Acces
}

//All those are taken as String Inside The object
console.log(Jsuser.games);//Use (.) To access Files in Object
 
//Anther method to Acces the Info
console.log(Jsuser["fullname"]);
console.log( typeof Jsuser[Sym]);
