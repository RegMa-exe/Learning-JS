//console.log(2>1);
//console.log(2<1);
//console.log(2==1);
//console.log(21);


console.log(null>0);//false
console.log(null>=0);//The reason why it shows True beacuse When we use >= or <= or ==  it JS convert the Null into 0 So it work acc to That
console.log(null<=0);//The reason why it shows True beacuse When we use >= or <= it JS convert the Null into 0 So it work acc to That
console.log(null<0);//false
console.log(null==0);//false


console.log(undefined==0)
console.log(undefined<0)
console.log(undefined<=0)// Here undefined is Taken as False in <= ,>=, == case


//(===)  It check Value + Data type

console.log("2"==2)//Checks only value So TRUE

//and where as

console.log("2"===2)//chechs data type + Value); SO FALSE
