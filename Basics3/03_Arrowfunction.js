// THIS

const user={
name:"vidhan",
price:999,

welcomemessage:function(){
console.log(`${this.name} welcome here!`);
// console.log(this);

//IT tell whole context of object out here


}
}
user.welcomemessage()
user.name="Krishna"
user.welcomemessage()// ("This") only prints acc to context "as in the object the context to the name is =>"vidhan" so it prints it but u can change the cotext afterward too right?

 console.log(this);//Because for this there is contetx as it dont have any scope to look out




 function chai(){
    let username="vidhan"
console.log(this.username);//OUTPUT:: Undefined (So This only works in Objects)


 }
 chai()



 //************************ARROW FUNCTIONS***********************//

const addtwo=(num1,num2)=>{
return num1+num2

}
console.log(addtwo(2,3));// Anther method to define functions these are called arrow function there is one more type

const addthree=(n1,n2,n3)=>(n1+n2+n3)//Use only () if you use {} then you have to return it also
console.log(addthree(1,2,3));

//**/* */
const userid=() => ({userpass:123})//here we use parantheses to declare ki you have to return the object
console.log(userid());






