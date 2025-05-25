// object literals ---->
let my_sym = "key1";

let JsUser = {
  name: "Raj",
  age: 32,
  location:"Delhi",
  email:"Html@gmail.com",
  isLoggedIn: false,
  [my_sym] : "key1"
}


console.log(JsUser.name);
console.log(JsUser[my_sym]);//dot se access nahi kar sakte.

//object.freeze(jisme change na karne ho).

/*as symble access karne ke liye: 


define symble :

let my_sym = "key1";
console.log([my_sym]);


*/

//let tinderUser= new Object()  // singalton object hai

let tinderUser= {}  // nonsingalton object hai

tinderUser.id="123anfrfj"
tinderUser.name="sam"
tinderUser.isLoggedIn=false
// console.log(tinderUser);


const regularUser={
  email:"somil@gail.com",
  fullname:{
    userFullname:{
      firstname:"Raj",
      lastname:"Kumar"
    }
  }
}

console.log(regularUser); //jitne chahe data access kar sakte hai bas dot lagate jaio 

const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
//const obj3={obj1,obj2};
//console.log(obj3);


// for marge in single object:


// const obj3=Object.assign({},obj1,obj2);
// console.log(obj3);

// another method:

 const obj3={...obj1, ...obj2};
// console.log(obj3);



console.log(Object.keys(JsUser));
console.log(Object.values(JsUser));

