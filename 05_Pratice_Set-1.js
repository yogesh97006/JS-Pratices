// Q1 adding a number to string

let a='Yogesh'
let b='9'
let c=1

console.log(a,b,c)
console.log(a+c,b+c)  // if we add any number to string it becomes string
console.log(a+10,b+96)

// Q2 useing Typeof To see the what type of Data

console.log(typeof (a+b+c),a+b+c)

//Q3 createing Const Obj to hold number later

const Items={
  Name:'Yogesh'
}

console.log(typeof Items)

// Items=45 cannot hold a number to a const obj


// Q4 adding new things to object

Items["Age"]=22
console.log(Items)

//Q5 Make a Dic

const Dic={
  Want:'Some thing You need',
  Car:' A vechile which can be drive',
  rest:'realxing body for some time'
}

console.log(Dic)

console.log(Dic["Car"]," ",Dic.rest) // both works has same

