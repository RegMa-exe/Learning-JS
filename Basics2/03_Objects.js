//Singleton

//Objects Literals

const Sym= Symbol("key1")

const Jsuser={
name: "Vidhan",
age:18,
[Sym]:"Key1",//We define Symbol Like this
games : ["DarkSouls","GTA5","Valorant"],
Email : "xyz@gmail.com",
Password: "Xyz",
"fullname": "Vidhan Shekhawat"//To acced these type we use 2nd method to Acces
}

//All those are taken as String Inside The object
console.log(Jsuser.games);//Use (.) To access Files in Object
 
//Anther method to Acces the Info
console.log(Jsuser["fullname"]);
console.log( typeof Jsuser[Sym]);
console.log(Jsuser);

Jsuser.Password="abc"
console.log(Jsuser.Password);
//Object.freeze(Jsuser)//Freezes entire Object Can Target an Indiviual one
Jsuser.Password="pqr"
console.log(Jsuser.Password);

//Adding Function isn Objects//
Jsuser.greeting=function() {
console.log("hello JSUSER");

}
console.log(Jsuser.greeting());//Hello JS user output
console.log(Jsuser.greeting);//It gives a function OUTPIUT:: Function(annoymus)

Jsuser.greeting2=function(){
console.log(`Hello ${this.name}`);//this is used to accces file in objects through a function

}
console.log(Jsuser.greeting2());//Hello Vidhan







