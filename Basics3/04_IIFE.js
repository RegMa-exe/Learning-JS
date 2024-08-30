// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

// To Reduce the Pollution We get from Global Scopes by Declaring  Our Own Scope for that Particular funation that we have to use

function mychai() {//THIS FUNCTION Can Get Pollutted By Effect of Global Scope on it!
    console.log("CONNECTED");
      
}
mychai()


//If we have to declare IIFE (Immediate Function)
//()()
// First ()=> Here function takes place Second ()=>To Execute
(function coffee(){
    console.log("Hello");
    
})()