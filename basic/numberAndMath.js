console.log(Math.random()); //0.1 to 0.9 ke beech 
console.log((Math.random()*10)+1); //1 to 10 ke beech




/*   math.floor(4.9) : gives 4

  math.ceil(4.9) : gives 5 */

const min = 10 
const max = 20;

console.log(Math.random() * (max-min+1) +min);// 10 to 20 ke beech.
 //for proper integer we use the floor or ceil.



 // <------- date and time---->

 let mydate= new Date();
//  console.log(mydate);
//  console.log(mydate.toDateString());

// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());


//hum parameter bhi pass kar sakte hai. ex:

let myCreateDate = new Date(25,5,20);
// console.log(myCreateDate.toLocaleString());



//-----------time------>



console.log(Date.now());//milisec.


//most imp toLocalString().