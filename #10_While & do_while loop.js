//1. while loop
let a=prompt('Enter the Value')
a=Number.parseInt(a)

let b=1000
while(b>a){
  console.log(b)
  --b
}

//2. Do-while loop

do{
  console.log(b+a)
  ++a
}while(b>a)