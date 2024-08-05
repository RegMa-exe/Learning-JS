const InstaUser= new Object()//Singelton Object
//To add Values IN Singeltn Object
InstaUser.id="123"
InstaUser.name="Vidhan"
InstaUser.isloggedIn=false

console.log(InstaUser);


/*  const Fbuser={}//Non Singelton Object   */
const Regularuser={
email:"xyz@gmail.com",
fullname:{//Object in Object
userfullname:{
firstname:"Vidhan",
Lastname:"SHekhawat"

}}}
console.log(Regularuser.fullname.userfullname.firstname);// Nesting into Object Details

//MERGING OBJECTES?//
const obj1={1:"a", 2:"b",}
const obj2={3:"c", 4:"d"}
constobj4={}

const obj3= Object.assign({},obj1 ,obj2    )// First one to Write=>TArget (Jisme Data STore kia Jayga), Then All are sources (Jisse Data Extract Kia JAyga)

console.log(obj2);

/* ANther method=>Glass Shatter*/
const mergedobj={...obj1,...obj2}
console.log(mergedobj);
//ARRAY TYPE//


const users=[//String me Store Krenge Objects
{
    id:1,
    email:"x@gmail.com"
},
{
    id:2,
    email:"y@gmail.com"
},
{
    id:3,
    email:"z@gmail.com"
}

]
console.log(users[1].email);//[to acces the string].to acces the object

//How to Handale data
const Player={
Name:"Tarnished",
Level:45,
Weopon:"Katana"
}

//Makes an array
console.log(Object.keys(Player));//Name,Level,Weopen
console.log(Object.values(Player));//Value fo those keys

console.log(Player.hasOwnProperty("Level"));





