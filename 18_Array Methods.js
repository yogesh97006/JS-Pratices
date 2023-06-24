let a=[10,20,30,40,50]

let b=a.toString()  // this used to convert to string
console.log(b,typeof b)

b=a.join("-") // this is to add between in a array index values
console.log(b)

let c=a.pop()  //it removes values from back side of an array 
console.log(c,a)

c=a.push(80)   // it pushes an element inside an array at the end of the array
console.log(c,a)

c=a.shift()  // shift removes from front side of the array
console.log(c,a)

c=a.unshift(100)  // it adds at the begging of the array
console.log(c,a)

delete a[0] // it deletes the value at the index which value is passed
console.log(a)

c=a.concat(b)  // it adds two arrays
console.log(c)

let d=c.splice(0,1,10)  // it is used to remove and add values 
// at first arugment it required index value from were you need to add or remove and 2nd index you need to tell how many elements you need to remove from it  aand next the how many values you write that many they will get added in that array
console.log(d,c)

d=c.slice(0,5)  // it will take value from starting index to it will stop to given index after reaching it 
console.log(d,c)

d=c.sort()
console.log(d)

d=c.reverse()
console.log(d)

console.log(d.length)
