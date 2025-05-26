function addTwoNumbers(num1, num2){

// let result=num1+num2;   -----> 
// return result;

 return num1+num2;

}

// const result=addTwoNumbers(56,86);// ye result variable uper wale result variable se alag hai bcz concept of scope.
//  console.log(result);


 function loginUserMessage(username){
  return `${username} just logged in`
 }
 let result=loginUserMessage("Vikek Kumar");
 console.log(result);




//  function calculatedCartPrice(num1){
//   return num1;
//  }

//  console.log(calculatedCartPrice(2859));//ek value hai tho thik hai if ek se jyaida value ho but num1 ek hi parameter define hai tb:


 
 function calculatedCartPrice(...num1){
  return num1;
 }
console.log(calculatedCartPrice(2859,4890,774839, 76848));



// this keyword current context ko refar karta hai: 


const user ={
  username:"raj",
  price:999,

  welcomeMessage:function(){
    console.log(`${this.username},welcome`);
  }


}

 user.welcomeMessage();


// arrow function:

// diffrent type


// const addTwo = (num1, num2) => {
//   return num1 + num2
// }

// console.log(addTwo(57,67));

// implicit return 

const addTwo = (num1, num2) => (num1 + num2)


console.log(addTwo(57,67));

// IIFE function

//()() mtlb first use raipe function 2nd is exicute funtion

(function greet(){
  //console.log(`YES understood`)
})();// ; impt


(
  () => {
   // console.log(`YES ,understood`);
  }
)();



//for off loop

const arr =[1,2,3,4,5,65];
for (const i of arr) {
  //console.log(i);
}

const greeting="hello";
for (const i of greeting) {
  //console.log(i);
}


// maps
const map=new Map();
map.set('IN',"India");
map.set('FR',"France");
map.set('IT',"Itli");
map.set('IN',"India");

console.log(map);