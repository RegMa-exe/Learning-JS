let name= "Vidhan"
const Rank=300
console.log(name+"  " +Rank+ "  Qualified");//But usuallly we dont do this in production looks junky

// We used Backticks{ `` }

console.log(`Hello My Name is ${name} and my rank is ${Rank}`);// Use ${Put the Variable/Const here}

const gamename=new String(`Darksouls1`)
console.log(gamename.charAt(6));//output s

console.log(gamename.length);//output 10
console.log(gamename.toUpperCase());//uppercase converted
console.log(gamename.indexOf("s"));//Tell position of letter output:4

//Make an Article of all the String names and link it here=>""

const Game= gamename.substring(0,8)
console.log(Game);
/*output: Darksoul {But we alloted to print 9 letter 0,1,2,3,4,5,6,7,8 
but only 8 are printed becuse it it what it is*/

/* So in order to print it you need to no .substring(0,9): output:Darksouls*/

const Title =gamename.slice(-5 ,9)
console.log(Title);
//Only diff here is we can use (-5 ,5){we can use _ve value  so it would print the gamenam reversed}

const newstring = "   Vidhan    "//we dont need to save the uncecsary spaces in the database
//we use trim here
console.log(newstring);//With Spaces
console.log(newstring.trim());//Spaces Removed

/***************************************************************************************** */
const url="https://Google.com/%20/%Vidhan"

console.log(url.replace(`%`,`-`));//Here only 1 % is replaced to make it global use (/%/g,`-`)
//output:https://Google.com/-20/%Vidhan

console.log(url.replace(/%/g,`-`));//output:https://Google.com/-20/-Vidhan

console.log(url.includes(`Vidhan`));//True or false (boolean exp)



