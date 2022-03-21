// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let num=+prompt("Enter the number:");
if (num % 2 === 0){
  alert("Number is even");
}
else
{
  alert("Number is odd");
}
// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let num1 = +prompt("Enter the first number");
let num2 = +prompt("Enter the second number");
  if ( num1 > num2 ){
    alert(`${num1} is greater`);
  }
  else{
    alert(`${num2} is greater`);
  }
/*
// 3. Convert the above code using`?` terniary operator
*/
num1=+prompt("Enter the first number");
num2=+prompt("Enter the second number");
(num1 > num2)?alert(`${num1} is greater`):alert(`${num2} is greater`);
/*

4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let house= prompt("Enter the House Name");
  if (house== "stark"){
    console.log("Winter is coming");
  }
  else if ( house== "lannister"){
    console.log(`A lannister always pays his debt`);
  }
  else{
    console.log(" All men must die");
  }
// 5. Convert the above code using`?` terniary operator
house == "stark"? console.log("Winter is coming"): house == "lannister" ? console.log(`A lannister always pays his debt`):console.log(" All men must die");
// Switch

let house1 = prompt("Enter the Address");
switch (house1){
  case "stark":
          console.log("Winter is coming");
          break;
  case "lannister":
          console.log(`A lannister always pays his debt`);
          break;
  default:console.log(" All men must die");
}

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let month=+prompt(`Enter the numer of the  month`)
  switch(month){
    case 1:
      alert("Jan has 31 Days");
      break;
    case 2:
      alert("Feb has 28 Days");
      break;
    case 3:
      alert("Mar has 31 Days");
      break;
    case 4:
      alert("Apr has 30 Days");
      break;
    case 5:
      alert("May has 31 Days");
      break;
    case 6:
      alert("Jun has 30 Days");
      break;
    case 7:
      alert("Jul has 31 Days");
      break;
    case 8:
      alert("Aug has 31 Days");
      break;
    case 9:
      alert("Sep has 30 Days");
      break;
    case 10:
      alert("Oct has 31 Days");
      break;
    case 11:
      alert("Nov has 30 Days");
      break;
    case 12:
      alert("Dec has 31 Days");
      break;
    default:
      alert(`Invalid Input`);
  }


/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salary = +prompt("Enter your salery");
if ( salary <= 20000 ){
  let tax = ( salary / 100 ) * 10;
}
else if ( salary <= 40000 ){
  tax= ( salary / 100 ) * 20;
}
else{
  tax = ( salary / 100 ) * 30;
}

switch(salary){
  case "salary <= 20000 ":
    alert(`${tax= (salary /100) * 10}`);
    break;
  case "salary <= 40000 ":
    alert(`${tax= (salary /100) * 20}`);
    break;
  default:
    alert(`${tax= (salary /100) * 30}`);
    break;
}
//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = +prompt(`Enter your marks.`);
  if (marks>100){
    alert(`Marks can't be greater than 100`);
  }
  else if(marks > 80 &&  marks < 100){
    alert('Grade A');
  }
  else if (marks > 50 &&  marks < 80){
    alert('Grade B');
  }
  else if(marks > 30 &&  marks < 50){
    alert('Grade C');
  }
  else {
    alert('Grade D');
  }

  switch (true){
    case (marks>100):
      alert(`Marks can't be greater than 100`);
      break;
    case (marks > 80 &&  marks < 100):
      alert('Grade A');
      break;
    case (marks > 50 &&  marks < 80):
      alert('Grade B');
      break;
    case (marks > 30 &&  marks < 50):
      alert('Grade C');
      break;
    default:
      alert('Grade D');
  }
/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather = prompt(`What is the weather like outside?`);
if (weather== "sunny"){
    alert(`Wear a T-shirt`);
  }
else if (weather== "rainy"){
    alert(`Don't forget to take your raincoat`);
  }
else if( weather == "hot"){
    alert(`Get a hanky`);
}
else if( weather == "freezing"){
    alert(`Get your sweeter on`);
}
else alert(`Not a valid Input`);