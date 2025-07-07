let computer ={cpu : 12}
let apple={screen : "4k"}
let asus = {GPU : 4050}
console.log(apple);//to see the actual object that is gettign fetched we u dunders(.__)
console.log(apple.__proto__);
let xbox  = {joystick : 3}
let ps={game : 5}
Object.setPrototypeOf(xbox,ps)
console.log("xbox",Object.getPrototypeOf(xbox));//this gets the protyope although it deosnt suggest 
