// Learning About Var , Let And Const 

var a=10;
let b=20;
const c=30;

console.log(a, b, c)

var name='Yogesh';
let age=22;
const lives='Hyderabad'
// let d=5000

  console.log(name,age,lives)
{
  name='Yogesh Saini'
 let age=25  // Hear we are decalring new let with age identifer in scope which can accepted beacuse it is in a scope now

  // if you does not use  let   then it is a same idetifer which is global and you are just updating its value in a scope

  const lives='banglore' 
// hear i am re-assigning the same variable identifer with const but now it allows beacuse it in now scope then it can compile if i remove const then i am trying to update const value that can not happened
  
  console.log(name,age,lives,d) // it will show undefined in place of d 
/** 
1. in var it shows undefined 
2.  if i initialize with let and const it will tell before iniltialize  can not access if it is in scope and try to access it will give not defined
*/
  
var d=5000
  
  // let d=5000;  if you define some thing inside a scope and try to print it out side it does not work 

  //if you define globally and the print in scope it works
}

  console.log(name,age,lives,d)