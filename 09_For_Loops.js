//1. For Loops
for(let i=1;i<18;++i){
  console.log('You can not get driving Licence beacuse your is less than 18 >', + i)
}
console.log('You can get a driving licence your age is 18')

let Skills={
  HTML:"70%",
  CSS:"60%",
  JS:"50%",
  REACT_JS:"70%",
  BOOTSTRAP:"80%",
  NEXT_JS:0,
}

console.log(Skills,typeof Skills)


// For in Loop
for (let a in Skills){
    console.log( a+ " "+Skills[a])
  // console.log(typeof a+ " "+typeof Skills[a])
}


//For of Loop
for (let b of 'Yogesh'){
  console.log(b)
}