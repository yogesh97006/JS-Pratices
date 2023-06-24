let a=[100,200,300,400,500]
console.log(a)

let b=a.map((ind,arr,val)=>{  // in map we use the val,ind,arr
  return (ind+arr+val)  
})

console.log(b,a)

let c=a.filter((v)=>{
  return v>10  // this is used for condition purpass
})
console.log('this is in the c ',c,a)


let add=(h1,h2)=>{
  return h1+h2
}
let d=a.reduce(add)  // this used for the operations 
console.log(d)