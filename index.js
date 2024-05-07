// ternary operator = a shortcut to if{} and else{} statements helps to assign a variable based on a condition 
//                    condition ? codeIfTrue : CodeIfFalse;

let age = 21;
let message = age >= 18 ? "You are an Adult" : "You are not an Adult";
console.log(message);

let time = 10;
let greeting = time < 12 ? "Good Morning!" : "Good Afternoon!";
console.log(greeting);

let isStudent = true;
let inform = isStudent ? "Yes" : "No";
console.log(inform);

let purchaseAmount = 150;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/10)}`)