function myname(){
    console.log("V");
    console.log("I");
    console.log("D");
    console.log("H");
    console.log("A");
    console.log("N");
    
}


myname()

function addtwonumbers(num1,num2)//(This is called Parameters (here we define the function))
{
    console.log(num1+num2);
    
}


addtwonumbers(3,4)//()this is called Arguments wheever we Call the value for Paramentres

// const result=addtwonumbers(7,3)//OUTPUT:10
// console.log(result);
// OUTPUT : Undefined (because we havent returend the value after the operations in functions)


// CORRECT METHOD// 
function addnumbers(n1,n2){
    let result= n1 + n2
    console.log("Myname1");
    return result//we return the value here after fuction does hsi work
    console.log("Myname2");//Function Dont do anyting after it Returns the value
    
    }
    const result=addnumbers(3,4)
    console.log(result);

    //Another method
    function Milkshake(Fruit1){


// Method 1
// let shake=Fruit1 +"Shake"
// return shake

//Method2
return Fruit1+"Shake"

    }
    const Bevrage=Milkshake("Mango")
console.log(Bevrage);

function loggedinmessage(username){
    //Lets Assume That we dont get any value?
    if(username===undefined){
        console.log("Sryy We dont Know You 0)_0)");
        return
    }
    return `Hello ${username}, Nice to See You Back!!`

}
console.log(loggedinmessage())


