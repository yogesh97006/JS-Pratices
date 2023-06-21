// variable 
var a=10;
let b='yogesh'
const c=true

// there are there types of varables those are var let and const. now most people don't use var variable its a golable and it can bee redeclared that's the main problem
// let and const are the block level scope and they can not be redeclared but let can be updated and const can not update


// primative - datatypes

let d=true  //Boolean  datatypes 
let e=BigInt('470')  //BigInt datatypes
let f=18  //Number datatypes
let i=null  //Null datatypes
let g="yogesh"  //String datatypes
let h=Symbol('this is a symbol') //Symbol datatypes
let j=undefined  //undefined datatypes

console.log(d,e,f,g,h,i,j)
console.log(typeof d,typeof e,typeof f,typeof g,typeof h,typeof i,typeof j)


// Non-primative data types are object
let items={
  fruit:'Mango',
  Vegitable:'Potato',
  drinks:'Dew',
  snakes:'chips'
}
// non-primative data types

console.log(items,items["snakes"],items.fruit)


//operators
// Arthemtic opertors
let k=2;
let l=3;

let m=0;
m=k+l  // add
console.log(m)
m=l-k  //sup
console.log(m)
m=k*l  //multiplys
console.log(m)
m=k/l  // division
console.log(m)
m=k%l  //reminders
console.log(m)
m=k**l  // if you put more than one star the it make it power
console.log(m)


m=0
// Assigement Operator

m+=k  // it acts as m=m+k
console.log(m)
// m-=k
console.log(m)
m*=k
console.log(m)
m/=k
console.log(m)
// m%=k
console.log(m)
m**=k
console.log(m)


//Logical opertor

if(m%k==0&&k>0){  // && called and operator it checks both values
  console.log('hear m is now 0')
}
else(
  console.log('hear m value is not zero')  // only print console values
)

if(m==0||k>0) // || is called or opertor
{
  let a=10
  console.log('hear m is now zero ',a)  /// hear it prints inside if values also using { } brackets
}

if(k==0){

  console.log("k is 0")
}
if(k!=0){  //  ! is called not opertor it checks or make the opposite or correct value
console.log("k is not zero")
}


m=0
m=m++  // first print then update
  console.log(m)
m=++m  // first increse then prints
  console.log(m)
m=m--  // first print then decremint
    console.log(m)
m=--m  // first dec then prints
  console.log(m)

m=0

console.log(m>k)
console.log(m<k)
console.log(m<=k)
console.log(m>=k)

// Conditional  stmt
let n=prompt('Enter a Number hear')
if(n==18){
  console.log('the number is 18 ')
}
else{
  console.log(`the number is ${n}`)
}

n=Number.parseInt(n)
if(n>=18){
  console.log('You can get licence')
}
else if(n>=16&&n<=18){
  console.log('You can Get a Licence without gear')
}
else{
  console.log("you can not get a licence")
}

// loops

// for loop

for(let i=0;i<n;++i){
  console.log(i)
}

// for in loop

for(let i in b){
  console.log(i+" "+b[i])
}


//for of loop
for(let i of b){
  console.log(i)
}


// while loop
let p=0
while(p<n){
  console.log(`this is a while loop ${p}`)
  ++p
}

// do-while loop
let q=0
do{
  console.log(`this is do while loop ${q}`)
  ++q
}while(q<n)