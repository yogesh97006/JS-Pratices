// 1. printing the marks obj using only for loop
let marks={
  FRO:'React js',
  BAC:'Node js',
  DB:'SQL',
}

console.log(marks)

for(let i=0;i<Object.keys(marks).length;++i){
   console.log('the skills yogesh have in '+Object.keys(marks)[i]+' with the skilss   '+marks[Object.keys(marks)[i]])
}

for(let j in marks){
  console.log(j +' '+marks[j])
}

let key=5
let inp
while(inp!=key){
inp=prompt('enter a value')
}

console.log('its done')

function mean(a,b,c,d){
  return (a+b+c+d)/4
}


console.log(mean(45,768,1000,1567))