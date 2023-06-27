//1.

let a=[10,20,30,40,50]

let b=prompt('Enter a number to add in s string ')
b=Number.parseInt(b)
a.push(b)
console.log(a)

// 2.

let c=[10,20,30,40,50]

let d
do{
d=prompt('Enter a number to add in s string ')
d=Number.parseInt(d)
c.push(d)
console.log(c)
}while(d!=0)

//3. 
let e=c.filter(x=>{
return(x%10==0)
})

console.log(e)

//4.
let f=c.map(x=>{
  return x*x
})
console.log(f)

//5. 
let g=c.reduce((t,v)=>{
  return (t+v)
})
console.log(g)