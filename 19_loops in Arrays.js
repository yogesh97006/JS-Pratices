let a=[10,20,30,40,50]

for(let i=0;i<a.length;++i){
  console.log(i)  // this is a normal for loop 
}

a.forEach((ele)=>{
   console.log(ele*ele)  // foreach is used to iterable 
})
console.log(a)

let b="Yogesh"

console.log(b,typeof b)
let c=Array.from(b)  // this is used to make a array 
console.log(c)

for(let d of a){
  console.log(d)  // this is used to print array values
}

for(let e in a){
  console.log(e,a[e])  // this is used to print array index and array values
}


