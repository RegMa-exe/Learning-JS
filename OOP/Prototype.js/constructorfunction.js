function Person (name,age){
this.name=name;
this.age=age;

}
function Car(make,model){
    this.make=make;
    this.model=model;
}
//they are constructor function 

let myCar = new Car("Toyota","camry");
    console.log(myCar);//create a whole new object

    let mynewcar = new Car("TATA","PUNCH");
console.log(mynewcar);//create a whole new object

 let mynewcar1 =Car("TATA","PUNCH");
console.log(mynewcar1);//Shows Undefined

let myCar1 =Car("Toyota","camry");
    console.log(myCar1);//Shows Undefined

    //new things does this ->> it referes to newly created object
 function animal(species){
    this.species=species
 }

    animal.prototype.sound=function()
{
    return `${this.species} makes a sound`

}
let dog = new animal("dog");//When called with new, it creates a new object and sets this.species = species on that object.
console.log(dog.sound());

let cat =new animal("cat");
console.log(cat.sound());

/*
JavaScript looks for sound() on dog

It doesn’t find it directly on dog, so it looks in animal.prototype

It finds the function and runs it with this pointing to dog

this.species is "dog", so it returns:*/
function drink(name){
    if(!new.target){// throws error if there is no "new" word is used
        throw new Error("Pls Add New keyword to Class");
        
    }
this.name=name;


}
let monster = new drink("monster");
console.log(monster.name);
 let redbull = drink("redbull");
 console.log(redbull.name);
 
