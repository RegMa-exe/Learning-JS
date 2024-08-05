//Array IN JS they are resizebale

const Myarray = [1,2,3,4,5,]//We can put any type of object in array
const Heroes=["hulk","vision","goku"]


console.log(Myarray[0]);
console.log(Heroes[1]);

//Array copy opertaion Creates SHALLOW COPIES
//Shallow copies=> directly linked with refrence point(any change in that copy will also reflect on the refrence point too)
//Deep copies=> They are not.

const array=new Array(1,2,3,4,5)//Anothermethod to declare an Array
console.log(array[2]);

//ARRAY METHODS//


array.push(6)//Push=> Used to insert value in array(Pushing value)
array.pop()//Remove the last value

array.unshift(8)//Insert the value in First Place in Array
array.shift()//Remove the First value in Array

console.log(array);

console.log(array.includes(5));//True or False
 console.log(array.indexOf(4));//Tells On which index it is lying

//IMP CONCEPT//

//Slice and Splice//
 const Array2 = [1,2,3,4,5,6]
 console.log("A",Array2);

 const sa2 =Array2.slice(1,3)//It prints the last digit even after giving +1 array index
 console.log(sa2);
//no effect on original Array therofre,Deep Copies


 console.log("B" , Array2);
 const sa3 = Array2.splice(1,3)//Dont uses the index of defined array
 console.log(sa3);
 console.log(Array2);//OUTPUT:=> After apllying splice it Removes the That particular objects from the string making it short
// Therefore,Splice is Shallow
