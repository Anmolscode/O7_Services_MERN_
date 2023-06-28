let a=prompt("Enter The Valid Age :")
a=Number.parseInt(a)
console.log("Your Age Is",a)

if (a<0)
{
  console.log("The Age Is Not Valid")
}
else if(a<9)
{
  console.log("You Are Not Eligible To drive")
}
else if(a>9 && a<18)
{
  console.log("You Are Not Eligible To drive but You can think after 18")
}
else 
{
  console.log("You Are Eligible To drive")
}

// switch statement

let b=prompt("Enter The Fruits Name :")
const fruits ="papaya"

switch (fruits) {
  case 'banana':
    console.log("price of banana is 50rs darjan");
    break;
  case 'mango':
  console.log("price of mango is 70rs per kg ");
    default :
     console.log("Not Found ");
}
