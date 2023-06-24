let a=prompt('enter a value')
console.log(a)
console.log(typeof a)
let b=Number.parseInt(a)
console.log(typeof b)
console.log(a,b)

// Conditional operators 
/** 
1. if 
2. if else
3. if else if else
/ */
if(a<16){
  console.log('You are Not Capable of Driving test')
}
else if(a>16&&a<18){
  console.log('You can get a non -gear driving licence')
}

else if(a>18&&b>1){
  console.log('you can get a driving licence and internationl and heaviy vehcile licence')
}
  else if(a>18&&b<1){
  console.log('You can get a Driving Licence')
}
else{
  console.log('something wrong')
}


// this is a ternary operator 
console.log('You can',a>18?"get it":"not get it")