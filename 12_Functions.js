let a=10
let b=20

console.log(a+b)


/// normal and oldway to write a function
function add(x,y){
  return x+y
}

console.log(add(a,b))
console.log(add(20,30))
  console.log(add(1000,b))
    console.log(add(a,2000))
      console.log(add(a,b))

// arrow function and moden way to write

let sub=(i,j)=>{
  return i-j
}

console.log(sub(5000,1000),sub(b,a))