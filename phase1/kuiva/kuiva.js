let pi =3.14159;
console.log(pi);

pi = 3.14;
console.log(pi);

// concatenate strings with the + operator ( joining them together)

let greeting = "Hello";
let name = "Edwin";
let message = greeting + ", " + name + "!";
console.log(message);


// interpolate variables and expressions inside template literals

let greet= "Hello";
let nam = "Edwin";
let sms = `${greet}, ${nam}!`;
console.log(sms);

//embeding expressions inside ${} placeholders

let a = 5;
let b =10;
//let sum = `${a} + ${b} = ${a+b}`;
//console.log(sum);
 
// string concatenation
//two or more strings using operator

let firstName = "Edwin";
let lastName = "kipyego";
let fullName =  firstName + ", " + lastName;
console.log(fullName);

//strings interpolation
// inserting variables directly into a string using backics
 let name1 = "korir";
 let name2 = "edu";
 let wholeName = `${name1} ${name2}`;
 console.log(wholeName);

 //using variables in strings 

 let nme = "Educator";
 //let age = 29;
 //console.log(`My name is ${name} and i am ${age} years old.`);

 //if statement
 // only if the condition is true
 //let age =19;
 //if (age>=18){
  //  console.log("you are an adult");
 //}
// if ..else statement
// execute a true and another false
let temperature = 35;
if (temperature >30){
    console.log("its hot outside");
}
else{
    console.log("the weather is fine");
}

// if...else if ...else
// when you have multiple conditions
let score = 85;
if (score>=90){
    console.log("Grade: A");
} else if (score>= 80){
    console.log("Grade: B");
} else if (score >=70){
    console.log("Grade: C");
} else{
    console.log("Grade: F");
}

//expressions
let sum = 5 + 3;
console.log(sum);
 let product = 45 * 80;
 console.log(product);
 let remainder = 10 % 3;
 console.log(remainder);

 let salamu = "chamgei" + " " + "Kipkor";
 console.log(salamu);
 // function operation
 // functions assigned to operations
  const add = function(a, b){
   return a + b
  }
   console.log(add(10, 20));
//using conditional statements
//const age = 14;
let isAdult;
//if (age>=18){
    isAdult = true;
//} else{
    isAdult = false;
//}
//console.log(isAdult);

//switch statement
// used to campare multiple variables
 let day = "sunday";
 switch (day){
    case "monday":
        console.log("start of the week!");
        break;
        case "friday":
            console.log("weekend is near");
break;
default: 
console.log("just another day")
 }

//ternary operator
// shorter way to write if...else statement
