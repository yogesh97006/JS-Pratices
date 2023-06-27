// functions

let a=(x,y)=>{
  return x+y
}  // this is an arrow function

function sum(x,y){
  return x+y
}  // this is a normal function 

// strings

let b='Yogesh'  // this is a double quotes string
let c="Saini" // this is a single quotes string
let d=`Kumar`  // this is a backticeks strings 

let e='Yogesh "Saini" ' // in this we can use double quotes inside a single quotes but can not use single quotes
let f="Yogesh 'Saini'" // in this we can use single quotes inside a double quotes but can not use duouble quotes inside a qouble quotes

let g=`'Yogesh' "saini"` // in backtickes we can use the double qoutes and single qoutes
console.log(b,c,d,e,f,g,g.length)
console.log(g.length)

let h=true
console.log(h)
h=h.toString()
console.log(typeof h)

// Strings Methods

let i='Yogesh saini'
console.log(i.slice(0,7)," ",i.slice(-5))
// it is used to slice a particalr part of a string iot will start from given parameter and then stop at the reaching to the second parameter

i=i.replace('saini',"Saini") // it will replace the existing word with given word
console.log(i)

i='   Yogesh     '
console.log(i+'\''+i.trim()) // it removes all spaces from a string from start and end not in between or inside in it

i=b.concat(" ",c)  // it is used to add string u can use + operator
console.log(i)

// Array 
let Num=[10,20,30,40,50]
console.log(Num[0],Num[4])

for(let i of Num){
  console.log(i)
}

//Array Methords

console.log(Num.push(60),Num.pop(),Num.unshift(0),Num.shift())

let j=new Array(100) // it will take ass 100 undefined items if u use onl single arguments

console.log(j.length,Array.isArray(j))
console.log(j instanceof Object)
console.log(j instanceof Array)

let Spl=Num.splice(3,2,20,10)
console.log(Spl,Num)

let Sli=Num.slice(2)
console.log(Sli,Num)

let Sum=Array.from(b)
console.log(Sum)


const index=Sum.keys()

for (let i of index){
  console.log(i)
}

Num.forEach((num)=>{
  console.log(num*num)
})

Num.map((Val,Ind,Arr)=>{
  console.log(Val,Ind,Arr)
  console.log(typeof Val,typeof Ind,typeof Arr)
  console.log(Val*2,Ind*2,Arr*2)
  console.log(typeof (Val+Ind+Arr))
  console.log(typeof Arr)
})

Num.flatMap((N)=>{
  console.log(N+5)
})

let NewNum=Num.filter((N)=>{
  return (N>15)
})

console.log(NewNum,Num)

Num.reduce((t,v,i,a)=>{
  console.log(t,v,i,a)
})