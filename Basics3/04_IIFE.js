// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

// To Reduce the Pollution We get from Global Scopes by Declaring  Our Own Scope for that Particular funation that we have to use

function mychai() {//THIS FUNCTION Can Get Pollutted By Effect of Global Scope on it!
    console.log("CONNECTED");
      
}
mychai();


//If we have to declare IIFE (Immediate Function)
//()()
// First ()=> Here function takes place Second ()=>To Execute

(function coffee(){
    console.log("Hello");
    
})();//Named IIFE

// If you get error like you have declred a function after another in that case use ";" to tell a function to finish and move onto another

//UNNAMED IIFE
((name)=>{
    console.log(`Hellow ${name}`);
    
})(`vidhan`);//why here because () is executing the function here "Isliye yhi dalege value of name"
