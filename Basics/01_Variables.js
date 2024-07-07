const accountId = 144455 /* Constant value cant be changes once defined */
let accountEmail= "Vidhanshekhawat@gmail.com"/* Let value can be changed */
var accountpassword="12345"/* Prefer not to USe var Variable Use Let (because of issue of block scope and Fucntion scope) */
accountCity="Jaipur"

//accountId = 2 Not allowed to rewrite const
accountEmail = "xyz@email.com"
accountpassword ="2323"
accountCity ="Alwar"



console.log(accountId);

console.table([accountCity,accountEmail,accountpassword])