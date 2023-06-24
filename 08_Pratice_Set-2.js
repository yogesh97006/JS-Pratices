//Q1. Using logical opertor to find persons age lies bet 10 to 20
let a=prompt('please enter the age')
 a=Number.parseInt(a)
if(a>10&&a<20){  //logical operator
console.log('this person age lise between in 10 to 20')
}
else{
  console.log('this is a else case to tell that the person age does not lies between 10 to 20')
}

//Q2. using switch case
let b=prompt('please enter a number')
b=Number.parseInt(b)
switch(b){
  case 1:
    console.log('b is less than 1')
    break;
  case 2:
    console.log('b is greater than 2')
    break;
}

//Q3. a number is divisble by 2 and 3
let c=prompt('The Number either divisible by 2 or 3')
c=Number.parseInt(c)
if(c%2==0&&c%3==0){
  console.log("The number is divisble by 2 and 3")
}else{
  console.log('the number does not divisble by 2 nor 3')
}


//Q4 . 
if(c%2==0||c%3==0){
  console.log('the number is either divisble by 2 or 3')
}
else{
  console.log('the number neither divisble by 2 nor 3')
}


//Q5. using ternary operator
console.log(a>18?'You can Drive':'You can not Drive')