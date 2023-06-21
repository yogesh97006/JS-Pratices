let a='Yogesh'
console.log(a)

console.log(a.toUpperCase())
console.log(a.toLowerCase())
console.log(a.toLocaleUpperCase())
console.log(a.toLocaleLowerCase())

let b='saini'
console.log(a.concat(b)) // it add two string acts like + 
console.log(a.concat(' is my first name and my last name is ',b))
console.log(a,b)
console.log(a+b)

console.log(a.slice(2),b.slice(1,4))  // slice takes two parmeters but not mandatory it can take one also 
// first one is to tell where to start in the string
// second one to tell where to stop after reaching that value ikt will stop excuting
 a=a.slice(0,5)
console.log(a)

a=a.replace('yoges',"Yogesh") // it does not replaced it beacuse string should have same string which has there
console.log(a)

a=a.replace('Yoges',"Yogesh") // this replaced it because it has the same stringh which is there
console.log(a)

let c='  G                   M  '
console.log(c,c.length)
console.log(c.trim(),a,b)  //trim is used to remove all the empty space before and after the string but it can not remove inside empty spaces

for(let i=0;i<a.length;++i){
  console.log(a[i]) //   in [ ] count starts from 0.strings can also print using [ ] brackets 
}